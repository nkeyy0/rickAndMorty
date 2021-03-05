import { charactersConstants } from "../constants/charactersConstants"

export const startDownloadCharacters = () => {
    return {
        type: charactersConstants.START_DOWNLOAD_CHARACTERS
    }
}

export const errorDownloadCharacters = () => {
    return {
        type: charactersConstants.ERROR_DOWNLOAD_CHARACTERS
    }
}

export const successDownloadCharacters = (data) => {
    return {
        type: charactersConstants.SUCCESS_DOWNLOAD_CHARACTERS,
        payload: data,
    }
}

export const getAllCharacters = () => {
    return {
        type: charactersConstants.GET_ALL_CHARACTERS,
    }
}