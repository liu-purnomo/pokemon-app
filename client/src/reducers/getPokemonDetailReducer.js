import { GET_POKEMON_DETAIL_FAIL, GET_POKEMON_DETAIL_PENDING, GET_POKEMON_DETAIL_SUCCESS } from '../actions/actionType';

const initialState = {
    pokemon: {},
    isLoading: false,
    isError: false,
    errorMessage: undefined
}

export const getPokemonDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMON_DETAIL_PENDING:
            return {
                ...state,
                isLoading: true
            }

        case GET_POKEMON_DETAIL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                pokemon: action.payload
            }

        case GET_POKEMON_DETAIL_FAIL:
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