import { useState } from 'react'
import { pokemons as initialPokemons } from './data/pokemon.js'
import { PokemonList } from './components/PokemonList.jsx';
import './styles/App.css'

function App() {
  const [count, setCount] = useState(0);
  
  const [pokemons] = useState(initialPokemons);

  return (
    <div className="app">
      <h1>Pokemon Card Collection</h1>
      <div className="cards-grid">
        <PokemonList pokemons={ pokemons }/>
      </div>
    </div>
  )
}

export default App
