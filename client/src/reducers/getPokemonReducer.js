import { GET_POKEMON_FAIL, GET_POKEMON_PENDING, GET_POKEMON_SUCCESS } from '../actions/actionType';

const initialState = {
    pokemons: [],
    isLoading: false,
    isError: false,
    errorMessage: undefined
}

export const getPokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMON_PENDING:
            return {
                ...state,
                isLoading: true
            }

        case GET_POKEMON_SUCCESS:
            return {
                ...state,
                isLoading: false,
                pokemons: action.payload
            }

        case GET_POKEMON_FAIL:
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMessage: action.payload
            }

        default:
            return state
    }
}