export function PokemonCard( { pokemon } ) {
    return (
        <div className="pokemon-card">
            <h2>{pokemon.name}</h2>
            <p>Type: {pokemon.type}</p>
            <p>HP: {pokemon.hp}</p>
            <p>Attack: {pokemon.attack}</p>
        </div>
    )
}