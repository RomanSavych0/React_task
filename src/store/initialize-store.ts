
import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducer'
import rootSaga from './root-saga'

const initializeStore = () => {
    const sagaMiddleware = createSagaMiddleware()
    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: false,
            }).concat(sagaMiddleware),
    })
    sagaMiddleware.run(rootSaga)


    return { store }
}

export default initializeStore
export type AppDispatch = ReturnType<typeof initializeStore>['store']['dispatch']
