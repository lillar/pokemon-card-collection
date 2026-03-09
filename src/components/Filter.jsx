export function Filter( { pokemons, filterType, setFilterType } ) {    
    const pokemonTypes = pokemons.map((p)=> p.type);
    const distinctTypes = [...new Set(pokemonTypes)];

    const handleClick = (newType, currentFilters) => () => {
        const isAlreadySelected = !!currentFilters.find((t) => t === newType);
        const filteredTypes = currentFilters.filter((t) => t != newType);
        setFilterType(isAlreadySelected ? filteredTypes :  [newType, ...currentFilters]);
    }

    return(
        <>
        {distinctTypes.map((type) => (
            <span key={type} className={"filter-pill" + (!!filterType.find((t) => t === type) ? " filter-pill-active" : "")} onClick={ handleClick(type, filterType)  } >{type}</span>
        ))}
        </>
    )
}