# Pokédex TypeScript Lite

## Sobre o projeto

O Pokédex TypeScript Lite é uma aplicação simples executada no terminal. Ela consulta dados de Pokémon na PokeAPI e organiza os resultados em um catálogo local durante a execução do programa.

Este projeto foi desenvolvido como atividade avaliativa do Módulo 01.

## Objetivo

Praticar os principais conceitos estudados no módulo:

- Node.js;
- JavaScript no back-end;
- TypeScript;
- interfaces;
- funções tipadas;
- arrays e objetos;
- JSON;
- métodos de array;
- classes;
- `async/await`;
- `fetch`;
- tratamento de erros;
- Git;
- GitHub;
- GitFlow;
- Kanban.

## Tecnologias utilizadas

- Node.js
- TypeScript
- TSX
- PokeAPI
- Git
- GitHub

## Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

- Node.js
- npm
- Git

## Como instalar

Clone o repositório:

```bash
git clone https://github.com/Leolescano/pokedex-typescript-lite.git
```

Acesse a pasta do projeto:

```bash
cd pokedex-typescript-lite
```

Instale as dependências:

```bash
npm install
```

## Como executar

Para executar o projeto em ambiente de desenvolvimento:

```bash
npm run dev
```

Para compilar o TypeScript:

```bash
npm run build
```

Para compilar e executar o projeto:

```bash
npm run start
```

## Estrutura do projeto

```text
pokedex-typescript-lite/
│
├── src/
│   ├── controllers/
│   │   └── TerminalController.ts
│   │
│   ├── models/
│   │   ├── CatalogoPokemon.ts
│   │   └── Pokemon.ts
│   │
│   ├── services/
│   │   └── PokeApiService.ts
│   │
│   ├── utils/
│   │   └── textFormatters.ts
│   │
│   └── main.ts
│
├── .gitignore
├── package.json
├── package-lock.json
├── pc_box.json
├── README.md
└── tsconfig.json

```

## Funcionalidades

- Buscar Pokémon por nome ou ID;
- tratar erro de Pokémon inexistente;
- transformar a resposta da API em um objeto simplificado;
- adicionar Pokémon ao catálogo;
- impedir Pokémon duplicado;
- listar os Pokémon armazenados;
- remover Pokémon pelo ID;
- exibir mensagens no terminal.

## Exemplos de execução

### Busca válida

Entrada testada:

```text
pikachu
```

Saída esperada:

```text
[OK] Pokémon encontrado: pikachu
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60
```

### Busca inválida

Entrada testada:

```text
pokemon-inexistente
```

Saída esperada:

```text
[ERRO] Pokémon não encontrado: pokemon-inexistente
```

### Duplicidade

Entrada testada:

```text
Adicionar pikachu duas vezes
```

Saída esperada:

```text
[AVISO] pikachu já está no catálogo.
```

### Remoção

Entrada testada:

```text
Remover Pokémon com ID 25
```

Saída esperada:

```text
[OK] Pokémon removido do catálogo.
```

### Remoção de um ID inexistente

Entrada testada:

```text
Remover Pokémon com ID 999
```

Saída esperada:

```text
[AVISO] Nenhum Pokémon encontrado com esse ID.
```

## Conceitos aplicados

### TypeScript

O TypeScript foi utilizado para definir os tipos dos objetos, parâmetros e retornos das funções. Isso ajuda a identificar erros durante o desenvolvimento.

### Interface PokemonResumo

A interface `PokemonResumo` representa apenas os dados necessários para o projeto:

- ID;
- nome;
- tipos;
- altura;
- peso.

### Interface PokemonApiResponse

A interface `PokemonApiResponse` representa os campos da resposta da PokeAPI utilizados pela aplicação.

### Fetch e async/await

A função `buscarPokemon` utiliza `fetch` para consultar a PokeAPI. Como a consulta é assíncrona, foram utilizados `async`, `await` e o retorno `Promise<PokemonResumo | null>`.

### Tratamento de erros

A busca utiliza `try/catch`. Quando o Pokémon não existe ou ocorre uma falha na consulta, a aplicação mostra uma mensagem e retorna `null`, sem interromper o programa.

### Métodos de array

Foram utilizados os seguintes métodos:

- `map`: transformar os tipos recebidos da API em uma lista de nomes;
- `some`: verificar se um Pokémon já existe no catálogo;
- `forEach`: listar os Pokémon;
- `filter`: remover um Pokémon pelo ID.

### Classe CatalogoPokemon

A classe `CatalogoPokemon` possui um array privado para armazenar os Pokémon durante a execução.

Seus principais métodos são:

- `adicionar`;
- `listar`;
- `remover`.

### Arquivo pc_box.json

O arquivo `pc_box.json` foi inicializado com um array vazio, conforme solicitado na estrutura do projeto. Nesta versão mínima, o catálogo funciona em memória e o arquivo fica preparado para uma futura implementação de persistência.

### Organização em camadas

O projeto foi separado em camadas para manter as responsabilidades organizadas:

- `models`: interfaces e classe do catálogo;
- `services`: comunicação com a PokeAPI;
- `controllers`: organização do fluxo executado no terminal;
- `utils`: formatação das mensagens;
- `main.ts`: ponto de entrada da aplicação.

## Organização do Kanban

O desenvolvimento foi organizado em um quadro Kanban com as colunas:

- Backlog;
- A Fazer;
- Em Andamento;
- Concluído.

Link do Kanban:

https://github.com/users/Leolescano/projects/1/views/1

## Branches utilizadas

- `main`
- `develop`
- `feat/pokedex`
- `docs/readme`
- `chore/finalizacao`

## Melhorias futuras

- Criar um menu interativo;
- salvar o catálogo em um arquivo JSON;
- exibir HP, ataque e defesa;
- criar filtros por tipo de Pokémon;
- criar uma API própria com Express.