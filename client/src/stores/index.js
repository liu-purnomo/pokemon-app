import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'
import { getPokemonReducer } from '../reducers/getPokemonReducer'
import { postPokemonReducer } from '../reducers/postPokemonReducer'
import { getPokemonDetailReducer } from '../reducers/getPokemonDetailReducer'
import { deletePokemonReducer } from '../reducers/deletePokemonReducer'

const rootReducers = combineReducers({
    pokemons: getPokemonReducer,
    postPokemon: postPokemonReducer,
    pokemonDetail: getPokemonDetailReducer,
    deletePokemon: deletePokemonReducer
})

const store = createStore(rootReducers, applyMiddleware(thunk))

export default store