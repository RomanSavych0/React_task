import { takeEvery, call, put } from 'redux-saga/effects';
import { submitFormSuccess, submitFormFailure } from './actions';
import { SUBMIT_FORM_REQUEST } from './actionTypes';
import {toast} from "react-toastify";
import {type ISubmission} from "../types.ts";

const mockApiCall = (input:ISubmission ) => {
    console.log('input' , input)
    return new Promise<any>((resolve, reject) => {
        setTimeout(() => {
            if (!['error@gmail.com'].includes(input.email)) {
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

        // @ts-ignore
        const response = yield call(mockApiCall, action.payload);
        console.log('action.payload' , action.payload)
        toast.success('Form submitted successfully!');

        yield put(submitFormSuccess(action.payload));

    } catch (error) {
        console.error('Error:', error);
        toast.error('Something went wrong! Please try again.');
        yield put(submitFormFailure('Something went wrong! Please try again.'));
    }
}

export function* watchSubmitForm() {
    yield takeEvery(SUBMIT_FORM_REQUEST, submitFormSaga);
}
