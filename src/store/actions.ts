import { SUBMIT_FORM_REQUEST, SUBMIT_FORM_SUCCESS, SUBMIT_FORM_FAILURE } from './actionTypes';

export const submitFormRequest = (formData: any) => ({
    type: SUBMIT_FORM_REQUEST,
    payload: formData
});

export const submitFormSuccess = (response: any) => ({
    type: SUBMIT_FORM_SUCCESS,
    payload: response
});

export const submitFormFailure = (error: string) => ({
    type: SUBMIT_FORM_FAILURE,
    payload: error
});
