import { buscarPokemon } from "./services/PokeApiService";

async function main(): Promise<void> {
  const pokemon = await buscarPokemon("pikachu");

  if (pokemon !== null) {
    console.log(`[OK] Pokémon encontrado: ${pokemon.nome}`);
    console.log(
      `#${pokemon.id} - ${pokemon.nome} | Tipos: ${pokemon.tipos.join(", ")} | Altura: ${pokemon.altura} | Peso: ${pokemon.peso}`
    );
  }

  await buscarPokemon("pokemon-inexistente");
}

main();