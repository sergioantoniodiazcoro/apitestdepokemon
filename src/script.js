let pokemonActual = 1;

async function obtenerPokemon(id) {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!res.ok) {
            alert("Pokémon no encontrado");
            return;
        }

        const data = await res.json();

        document.getElementById("pokeName").textContent = data.name.toUpperCase();
        document.getElementById("pokeId").textContent = "ID: " + data.id;

        const tipos = data.types.map(t => t.type.name).join(", ");
        document.getElementById("pokeTypes").textContent = "Tipos: " + tipos;

        document.getElementById("pokeImg").src =
            data.sprites.other["official-artwork"].front_default;

        pokemonActual = data.id;

    } catch (error) {
        alert("Error al obtener datos");
    }
}

function buscarPokemon() {
    const valor = document.getElementById("pokemonInput").value.toLowerCase();
    if (valor) obtenerPokemon(valor);
}

function siguiente() {
    pokemonActual++;
    obtenerPokemon(pokemonActual);
}

function anterior() {
    if (pokemonActual > 1) {
        pokemonActual--;
        obtenerPokemon(pokemonActual);
    }
}

obtenerPokemon(1);
