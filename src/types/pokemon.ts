export interface PokemonBasic {
  name: string
  url: string
}

export interface PokemonSprites {
  other: {
    ['official-artwork']: {
      front_default: string
    }
  }
}

export interface PokemonType {
  type: {
    name: string
    url: string
  }
}

export interface PokemonDetail {
  name: string
  weight: string | number
  height: string | number
  types: PokemonType[]
  sprites: PokemonSprites
}