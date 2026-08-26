import { CatalogoPokemon } from "./models/CatalogoPokemon";
import { buscarPokemon } from "./services/PokeApiService";

async function main(): Promise<void> {
  const catalogo = new CatalogoPokemon();

  const pikachu = await buscarPokemon("pikachu");

  if (pikachu !== null) {
    console.log(`[OK] Pokémon encontrado: ${pikachu.nome}`);
    catalogo.adicionar(pikachu);
    catalogo.adicionar(pikachu);
  }

  const charmander = await buscarPokemon("charmander");

  if (charmander !== null) {
    console.log(`[OK] Pokémon encontrado: ${charmander.nome}`);
    catalogo.adicionar(charmander);
  }

  await buscarPokemon("pokemon-inexistente");

  catalogo.listar();

  catalogo.remover(25);
  catalogo.listar();

  catalogo.remover(999);
}

main();