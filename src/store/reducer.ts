import {combineReducers} from "redux";
import {reducer as userFormReducer}  from "../features/user-form"
const rootReducer = combineReducers({
    userForm:userFormReducer,

})
type RootState = ReturnType<typeof rootReducer>
export type { RootState }
export default rootReducer