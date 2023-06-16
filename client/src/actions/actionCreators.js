import { DELETE_POKEMON_FAIL, DELETE_POKEMON_SUCCESS, GET_POKEMON_DETAIL_FAIL, GET_POKEMON_DETAIL_PENDING, GET_POKEMON_DETAIL_SUCCESS, GET_POKEMON_FAIL, GET_POKEMON_PENDING, GET_POKEMON_SUCCESS, POST_POKEMON_FAIL, POST_POKEMON_PENDING, POST_POKEMON_SUCCESS, RESET_DATA } from './actionType';

export const getPokemonPending = () => ({
    type: GET_POKEMON_PENDING
})

export const getPokemonSuccess = (payload) => ({
    type: GET_POKEMON_SUCCESS,
    payload: payload
})

export const getPokemonFail = (errorMessage) => ({
    type: GET_POKEMON_FAIL,
    payload: errorMessage
})

export const actionGetPokemon = (type) => async (dispatch, getState) => {
    try {
        dispatch(getPokemonPending)
        let response;
        if (type !== undefined) {
            response = await fetch('http://localhost:3000/pokemon?type=' + type)
        } else {
            response = await fetch('http://localhost:3000/pokemon')
        }

        const responseJson = await response.json()
        if (!response.ok) {
            throw (responseJson)
        } else {
            dispatch(getPokemonSuccess(responseJson))
        }
    } catch (err) {
        dispatch(getPokemonFail(err.message))
    }
}

export const postPokemonPending = () => ({
    type: POST_POKEMON_PENDING
})

export const postPokemonSuccess = () => ({
    type: POST_POKEMON_SUCCESS
})

export const postPokemonFail = (errorMessage) => ({
    type: POST_POKEMON_FAIL,
    payload: errorMessage
})

export const actionPostPokemon = (formValue) => async (dispatch, getState) => {
    try {
        dispatch(postPokemonPending)
        const response = await fetch('http://localhost:3000/pokemon', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(formValue),
        })
        const responseJson = await response.json()
        if (!response.ok) {
            throw (responseJson)
        } else {
            dispatch(postPokemonSuccess())
        }
    } catch (err) {
        dispatch(postPokemonFail(err.message))
    }
}

export const resetData = () => ({
    type: RESET_DATA
})


export const actionResetData = () => (dispatch, getState) => {
    dispatch(resetData())
}

//GET POKEMON DETAIL

export const getPokemonDetailPending = () => ({
    type: GET_POKEMON_DETAIL_PENDING
})

export const getPokemonDetailSuccess = (payload) => ({
    type: GET_POKEMON_DETAIL_SUCCESS,
    payload: payload
})

export const getPokemonDetailFail = (errorMessage) => ({
    type: GET_POKEMON_DETAIL_FAIL,
    payload: errorMessage
})

export const actionGetPokemonDetail = (id) => async (dispatch, getState) => {
    try {
        dispatch(getPokemonDetailPending)
        const response = await fetch('http://localhost:3000/pokemon/' + id)
        const responseJson = await response.json()
        if (!response.ok) {
            throw (responseJson)
        } else {
            dispatch(getPokemonDetailSuccess(responseJson))
        }
    } catch (err) {
        dispatch(getPokemonDetailFail(err.message))
    }
}

export const deletePokemonSuccess = () => ({
    type: DELETE_POKEMON_SUCCESS
}
)
export const deletePokemonFail = () => ({
    type: DELETE_POKEMON_FAIL
})

export const actionDeletePokemon = (id) => async (dispatch, getState) => {
    try {
        const response = await fetch('http://localhost:3000/pokemon/' + id, {
            method: 'DELETE'
        })
        const responseJson = await response.json()
        if (!response.ok) {
            throw (responseJson)
        } else {
            dispatch(deletePokemonSuccess())
        }
    } catch (err) {
        dispatch(deletePokemonFail(err.message))
    }
}

