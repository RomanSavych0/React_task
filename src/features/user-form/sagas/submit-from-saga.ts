import {ISubmission} from "../../../types.ts";
import {call, put} from "redux-saga/effects";
import {toast} from "react-toastify";
import {actions} from "../slice.ts";

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


export function* submitFormSaga(action: any) {
    try {
        // @ts-ignore
        const response = yield call(mockApiCall, action.payload);

        toast.success('Form submitted successfully!');

        yield put(
            actions.SUBMIT_FORM_SUCCESS(action.payload)
        );

    } catch (error) {
        console.error('Error:', error);
        toast.error('Something went wrong! Please try again.');
        yield put(actions.SUBMIT_FORM_FAILURE('Something went wrong! Please try again.'));
    }
}
