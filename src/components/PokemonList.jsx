import { PokemonCard } from "./PokemonCard"

export function PokemonList( { pokemons } ) {
    return(
        <div className="PokemonList">
        {pokemons.map((p) => (
            <PokemonCard key={p.id} pokemon={p}/>
        ))}
        </div>
    )
}