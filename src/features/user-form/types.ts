import { PayloadAction } from "@reduxjs/toolkit";
import {type ISubmission} from "../../types.ts";


export type PayloadActions = {
    GET_EMBED_CONFIG_REQUEST: PayloadAction<void>;
    SUBMIT_FORM_REQUEST: PayloadAction<ISubmission>;
    SUBMIT_FORM_SUCCESS: PayloadAction<any>; // Replace `any` with a specific type if you have a defined submission structure
    SUBMIT_FORM_FAILURE: PayloadAction<string>;
};
