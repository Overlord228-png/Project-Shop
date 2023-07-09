import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState: {
        id: number,
        email: null,
        role: null
    },
    reducers: {
        changeId: (state,action) => {
            state.name = action.payload;
        },
        changeAge: (state,action) => {
            state.age = action.payload;
        },
        changeCity: (state,action) => {
            state.city = action.payload;
        },
        changeNunber: (state,action) => {
            state.number = action.payload;
        }
    }
})

export default userSlice.reducer

export const {changeName,changeAge,changeCity,changeNunber} = userSlice.actions