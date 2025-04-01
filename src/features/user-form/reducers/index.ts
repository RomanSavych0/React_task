import { CaseReducer } from "@reduxjs/toolkit";
import { IUserFormState } from "../config.ts";
import { PayloadActions } from "../types.ts";


// Form Submission Reducers
export const GET_EMBED_CONFIG_REQUEST: CaseReducer<
    IUserFormState,
    PayloadActions["GET_EMBED_CONFIG_REQUEST"]
> = (state) => ({ ...state });

export const SUBMIT_FORM_REQUEST: CaseReducer<
    IUserFormState,
    PayloadActions["SUBMIT_FORM_REQUEST"]
> = (state ) => {
    state.loading = true;
};

export const SUBMIT_FORM_SUCCESS: CaseReducer<
    IUserFormState,
    PayloadActions["SUBMIT_FORM_SUCCESS"]
> = (state, action) => {
    state.loading = false;
    state.submissions.push(action.payload);
};

export const SUBMIT_FORM_FAILURE: CaseReducer<
    IUserFormState,
    PayloadActions["SUBMIT_FORM_FAILURE"]
> = (state, action) => {
    state.loading = false;
    state.error = action.payload;
};



