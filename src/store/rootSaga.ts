import { all } from 'redux-saga/effects';
import { watchSubmitForm } from './sagas';

export default function* rootSaga() {
    yield all([watchSubmitForm()]);
}
