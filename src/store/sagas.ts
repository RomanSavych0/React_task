// sagas.ts
import { takeEvery, call, put, delay } from 'redux-saga/effects';
import { submitFormSuccess, submitFormFailure } from './actions';
import { SUBMIT_FORM_REQUEST } from './actionTypes';
import {toast} from "react-toastify";

// Mocked API call function
const mockApiCall = (input: string) => {
    return new Promise<any>((resolve, reject) => {
        setTimeout(() => {
            if (input.length >= 3) {
                resolve({ message: "Form submitted successfully!", input });
            } else {
                reject("Input is too short!");
            }
        }, 2000);
    });
};


function* submitFormSaga(action: any) {
    try {
        console.log('Starting mocked API call with input:', action.payload);

        const response = yield call(mockApiCall, action.payload);
        toast.success('Form submitted successfully!');

        yield put(submitFormSuccess(response));

    } catch (error) {
        console.error('Error:', error);
        toast.error('Something went wrong! Please try again.');
        yield put(submitFormFailure('Something went wrong! Please try again.'));
    }
}

export function* watchSubmitForm() {
    yield takeEvery(SUBMIT_FORM_REQUEST, submitFormSaga);
}
