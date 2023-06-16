import { DELETE_POKEMON_FAIL, DELETE_POKEMON_SUCCESS, RESET_DATA } from '../actions/actionType';

const initialState = {
    isSuccess: false,
    isError: false,
    errorMessage: undefined
}

export const deletePokemonReducer = (state = initialState, action) => {
    switch (action.type) {

        case DELETE_POKEMON_SUCCESS:
            return {
                ...state,
                isSuccess: true
            }

        case DELETE_POKEMON_FAIL:
            return {
                ...state,
                isError: true,
                errorMessage: action.payload
            }

        case RESET_DATA:
            return initialState

        default:
            return state
    }
}