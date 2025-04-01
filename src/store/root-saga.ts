import { all } from 'redux-saga/effects'
import userFormSagas from "../features/user-form/sagas"

export default function* () {
    yield all([...userFormSagas])
}
