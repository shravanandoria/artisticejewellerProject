import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { LoginInterface, SignupInterface } from "../UserTypes/userInterface";
import Cookies from "js-cookie";

export const signUp = createAsyncThunk('user/signup', async (data : SignupInterface, thunkApi) => {
    try {
        const responseData = await axios({
            method: 'post',
            url: `http://localhost:1337/api/auth/local/register`,
            data
        })
        const {user: {name, id, username, email, dob, followers, following, profilePic}, jwt} = responseData.data
        Cookies.set('name', name)
        Cookies.set('id', id)
        Cookies.set('jwt', jwt)
        return {id, name, jwt}
    } catch (error) {
        return thunkApi.rejectWithValue((error as Error).message);
    }
});

export const login = createAsyncThunk('user/login', async (data : LoginInterface, thunkApi) => {
    try {
        const {identifier, password} = data
        const response = await axios.post('http://localhost:1337/api/auth/local', {
            identifier,
            password
        });
        const {user: {id, name}, jwt} = response.data
        Cookies.set('name', name)
        Cookies.set('id', id)
        Cookies.set('jwt', jwt)
        return {id, name, jwt}
    } catch (error) {
        return thunkApi.rejectWithValue((error as Error).message);
    }
})