import { createSlice } from '@reduxjs/toolkit'
import { initialState, sliceName } from './config'
import * as reducers from './reducers'

const userFormSlice = createSlice({
    name: sliceName,
    initialState,
    reducers,
})

export const { actions, reducer } = userFormSlice
