import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: "Select a Language",
    result: {
        state: "msg",
        msg: "Please select a language"
    },
}

export const gitsearchSlice = createSlice({
    name:  "gitsearch",
    initialState,
    reducers: {
        search: (state,action) => {
            state.search = action.payload
        },
        loading: (state) => {
            state.result.msg = "Loading, please wait.."
            state.result.state = "msg"
        },
        error: (state) => {
            state.result.msg = "Error fetching repositories",
            state.result.state = "error"
        },
        result: (state,action) => {
            state.result.msg = action.payload,
            state.result.state = "result"
        }
    }
})

export const { search, loading, error, result } = gitsearchSlice.actions

export default gitsearchSlice.reducer