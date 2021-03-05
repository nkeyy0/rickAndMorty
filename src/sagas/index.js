import { call, put, takeEvery } from 'redux-saga/effects'
import { errorDownloadCharacters, startDownloadCharacters, successDownloadCharacters } from '../actions/characters-action'
import { charactersConstants } from '../constants/charactersConstants';
import { allCharactersQuery } from '../queries/allCharactersQuery';

export function* sagaWatcher() {
    yield takeEvery(charactersConstants.GET_ALL_CHARACTERS, charactersWorker)
}

function* charactersWorker() {
    yield put(startDownloadCharacters())
    try {
        const data = yield call(() => {
            fetch('https://rickandmortyapi.com/graphql', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                query: allCharactersQuery
            })
        });
        }) 
        yield put(successDownloadCharacters(data))
    } catch (error) {
        yield put(errorDownloadCharacters())
    }
}