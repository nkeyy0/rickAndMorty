import { charactersConstants } from "../../constants/charactersConstants"

const initialState = {
    loading: false,
    error: false,
    characters: [],
}

export const charactersReducer = (state = initialState, action) => {
    switch(action.type) {
        case charactersConstants.START_DOWNLOAD_CHARACTERS : 
        return {
            ...state,
            loading: true
        }
        case charactersConstants.SUCCESS_DOWNLOAD_CHARACTERS : 
        return {
            ...state,
            loading: false,
            error: false,
            characters: action.payload
        }
        case charactersConstants.ERROR_DOWNLOAD_CHARACTERS : 
        return {
            ...state,
            loading: false,
            error: true,
        }
        default: 
        return state
    }
}