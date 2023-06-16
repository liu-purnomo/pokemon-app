import { POST_POKEMON_FAIL, POST_POKEMON_PENDING, POST_POKEMON_SUCCESS, RESET_DATA } from '../actions/actionType';

const initialState = {
    isSuccess: false,
    isLoading: false,
    isError: false,
    errorMessage: undefined
}

export const postPokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_POKEMON_PENDING:
            return {
                ...state,
                isLoading: true
            }

        case POST_POKEMON_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccess: true
            }

        case POST_POKEMON_FAIL:
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMessage: action.payload
            }

        case RESET_DATA:
            return initialState

        default:
            return state
    }
}