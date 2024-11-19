async function fetchData(){
    try {
        let pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        pokemonName = pokemonName.replace(/\s+/g, "-");
        
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok){
            throw new Error("Couldn't fetch data");
        }
        const data = await response.json();
        
        const pokemonDisplayName = data.name
            .replace('-', ' ')
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        
        const pokemonSprite = data.sprites.other.home.front_default;

        const imgElement = document.getElementById("pokemonSprite");
        const nameElement = document.getElementById("pokemonDisplayName");

        console.log(data);

        nameElement.textContent = `${pokemonDisplayName}`;
        nameElement.style.display = "Block";

        imgElement.src = pokemonSprite;
        imgElement.style.display = "Block";
    }
    catch (error) {
        console.error(error);
    }
}


document.getElementById("pokemonName").addEventListener("keydown", function(event){
    if (event.key == "Enter" || event.key == "enter") { fetchData(); }
});