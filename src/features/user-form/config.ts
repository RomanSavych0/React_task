export  interface IUserFormState {
    data: any;
    error: string;
    loading: boolean;
    submissions:Array<any>
}

export const initialState: IUserFormState = {
    data: null,
    error: '',
    loading: false,
    submissions:[]
};
export const sliceName = 'userForm'
