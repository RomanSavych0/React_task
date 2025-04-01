import * as React from 'react'
import { Provider } from 'react-redux'
import { Store } from 'redux'

import { initializeStore, type RootState } from '../store/'

type Props = {
    children?: React.ReactNode
    store?: Store<RootState>
}

const { store: initialStore } = initializeStore()

const ReduxContainer = ({ children, store = initialStore }: Props) => (
    <Provider store={store}>
        {children}
    </Provider>
)

export default React.memo(ReduxContainer)
