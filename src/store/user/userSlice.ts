import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import Cookies from "js-cookie";
import { login, signUp } from "./UserActions/userActions";
import { initialStateInterface, SignupInterface } from "./UserTypes/userInterface";


const initialState : initialStateInterface = {
    user: undefined,
    error: null,
    isLoading: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state: initialStateInterface) => {
            Cookies.remove('name')
            Cookies.remove('id')
            Cookies.remove('jwt')
            state.user = undefined
        }
    },
    extraReducers: (builder) => {
        builder.addCase(signUp.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(signUp.fulfilled, (state, action ) => {
            console.log({action: action.payload})
            state.user = action.payload;
            state.isLoading = false
        })
        builder.addCase(signUp.rejected, (state, action) => {
            console.log(action.payload)
            state.error = action.payload;
            state.isLoading = false;
        })
        builder.addCase(login.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoading = false
        })
        builder.addCase(login.rejected, (state, action) => {
            console.log(action.payload)
            state.error = action.payload;
            state.isLoading = false;
        })
    }
})

export const {logout} = userSlice.actions

export default userSlice.reducer;