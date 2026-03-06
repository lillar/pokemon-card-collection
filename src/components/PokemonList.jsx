import { PokemonCard } from "./PokemonCard"

export function PokemonList( { pokemons } ) {
    return(
        <div className="pokemon-list">
        {pokemons.map((p) => (
            <PokemonCard key={p.id} pokemon={p}/>
        ))}
        </div>
    )
}