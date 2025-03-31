import { SUBMIT_FORM_REQUEST, SUBMIT_FORM_SUCCESS, SUBMIT_FORM_FAILURE } from './actionTypes';

interface State {
    data: any;
    error: string;
    loading: boolean;
}

const initialState: State = {
    data: null,
    error: '',
    loading: false,
};

const formReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SUBMIT_FORM_REQUEST:
            return { ...state, loading: true };
        case SUBMIT_FORM_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case SUBMIT_FORM_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default formReducer;
