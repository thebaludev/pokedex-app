const BASE_URL: string = 'https://pokeapi.co/api/v2'

export async function getPokemonList() {
  const results = await fetch(`${BASE_URL}/pokemon`)

  if (!results.ok) throw new Error('Error when obtaining the Pokémon list')

  const data = await results.json()  

  return { results: data.results }
}

export async function getPokemonDetail(url: string) {
  const details = await fetch(url)

  if (!details.ok) throw new Error('Error when obtaining the Pokémon list')

  const data = await details.json()

  return data
}