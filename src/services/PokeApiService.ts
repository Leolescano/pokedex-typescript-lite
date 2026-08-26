import {
  PokemonApiResponse,
  PokemonResumo
} from "../models/Pokemon";

export async function buscarPokemon(
  nomeOuId: string
): Promise<PokemonResumo | null> {
  try {
    const termoBusca = nomeOuId.trim().toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${termoBusca}`;

    const resposta = await fetch(url);

    if (!resposta.ok) {
      console.log(`[ERRO] Pokémon não encontrado: ${nomeOuId}`);
      return null;
    }

    const dados = (await resposta.json()) as PokemonApiResponse;

    const tipos = dados.types.map((item) => item.type.name);

    const pokemon: PokemonResumo = {
      id: dados.id,
      nome: dados.name,
      tipos,
      altura: dados.height,
      peso: dados.weight
    };

    return pokemon;
  } catch {
    console.log("[ERRO] Não foi possível buscar o Pokémon.");
    return null;
  }
}