import { CatalogoPokemon } from "../models/CatalogoPokemon";
import { buscarPokemon } from "../services/PokeApiService";

export class TerminalController {
  private catalogo = new CatalogoPokemon();

  async executarFluxo(): Promise<void> {
    const pikachu = await buscarPokemon("pikachu");

    if (pikachu !== null) {
      console.log(`[OK] Pokémon encontrado: ${pikachu.nome}`);
      this.catalogo.adicionar(pikachu);
      this.catalogo.adicionar(pikachu);
    }

    const charmander = await buscarPokemon("charmander");

    if (charmander !== null) {
      console.log(`[OK] Pokémon encontrado: ${charmander.nome}`);
      this.catalogo.adicionar(charmander);
    }

    await buscarPokemon("pokemon-inexistente");

    this.catalogo.listar();

    this.catalogo.remover(25);
    this.catalogo.listar();

    this.catalogo.remover(999);
  }
}