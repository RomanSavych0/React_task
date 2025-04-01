import {takeEvery} from "redux-saga/effects";
import {actions} from "../slice.ts";
import {submitFormSaga} from "./submit-from-saga.ts";

export default [
    takeEvery(actions.SUBMIT_FORM_REQUEST, submitFormSaga),
]
