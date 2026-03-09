export function Filter( { pokemons, filterType, setFilterType } ) {    
    const pokemonTypes = pokemons.map((p)=> p.type);
    const distinctTypes = [...new Set(pokemonTypes)];

    const handleClick = (newType, currentFilter) => () => {
        setFilterType(newType === currentFilter ? null : newType);
    }

    return(
        <>
        {distinctTypes.map((type) => (
            <span key={type} className={"filter-pill" + (filterType === type ? " filter-pill-active" : "")} onClick={ handleClick(type, filterType)  } >{type}</span>
        ))}
        </>
    )
}