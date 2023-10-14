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

export const login = createAsyncThunk('login/user', async (account) => {
    try {
        const resp = await axios.post('http://127.0.0.1:5000/api/user/login', account);
        return resp.data.token;
    } catch (e) {
        return null;
    }
});

export const refreshToken = createAsyncThunk("auth/user", async (token)=>{
    const resp = await axios.get("http://127.0.0.1:5000/api/user/auth", {
        headers: {
            Authorization: "Bearer " + token
        }
    })
    return resp.data.token;
})


const userSlice = createSlice({
    name:'user',
    initialState: {
        id: -1,
        email: null,
        role: null,
        errorLoading: false
    },
    reducers: {
        logOut: (state,action) => {
            state.id = -1;
            state.email = null;
            state.role = null;
            state.errorLoading = false;
            localStorage.removeItem("token")
        }
    },
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
        .addCase(login.fulfilled, (state, action) => {
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
        .addCase(refreshToken.fulfilled,(state,action)=>{
            localStorage.setItem('token',action.payload)
                const decode = jwtDecode(action.payload)
                state.email = decode.email
                state.role = decode.role
                state.id = decode.id
        })
        .addCase(refreshToken.rejected,()=>{
            localStorage.removeItem('token')
        })
    }
})

export default userSlice.reducer

export const {logOut} = userSlice.actions