import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import jwtDecode from 'jwt-decode'

export const registration = createAsyncThunk('registration/user', async(account) => {
    try {
        const resp = await axios.post('http://127.0.0.1:5000/api/user/registration',account)
        return resp.data.token
    } catch(e) {
        return null
    }
})

export const aut = createAsyncThunk('auth/user', async (account) => {
    try {
        const resp = await axios.post('http://127.0.0.1:5000/api/user/aut', account);
        return resp.data.token;
    } catch (e) {
        return null;
    }
});

const userSlice = createSlice({
    name:'user',
    initialState: {
        id: -1,
        email: null,
        role: null,
        errorLoading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registration.fulfilled, (state,action)=>{
            if (action.payload) {
                state.errorLoading = false
                localStorage.setItem('token',action.payload)
                const decode = jwtDecode(action.payload)
                state.email = decode.email
                state.role = decode.role
                state.id = decode.id
                console.log(decode)
            } else {
                state.errorLoading = true
            }
        })
        .addCase(aut.fulfilled, (state, action) => {
            if (action.payload) {
                state.errorLoading = false;
                localStorage.setItem('token', action.payload);
                const decode = jwtDecode(action.payload);
                state.email = decode.email;
                state.role = decode.role;
                state.id = decode.id;
                console.log(decode);
            } else {
                state.errorLoading = true;
            }
        })
    }
})

export default userSlice.reducer

export const {} = userSlice.actions