import { useState } from 'react'
import { pokemons as initialPokemons } from './data/pokemon.js'
import { PokemonList } from './components/PokemonList.jsx';
import { Filter } from './components/Filter.jsx';
import './styles/App.css'

function App() {
  const [filterType, setFilterType] = useState([]);
  
  const [pokemons] = useState(initialPokemons);

  return (
    <div className="app">
      <h1>Pokemon Card Collection</h1>
      <div className="filter">
        <Filter pokemons={ pokemons } filterType={ filterType } setFilterType={ setFilterType } />
      </div>
      <div className="cards-grid">
        <PokemonList pokemons={ filterType.length>0 ? pokemons.filter((pokemon) => filterType.find((type) => type === pokemon.type)) : pokemons }/>
      </div>
    </div>
  )
}

export default App
