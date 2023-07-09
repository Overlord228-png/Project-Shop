import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    posts:[],
    status: 'idle',
    error:false
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (limit,page) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
    return response.data
})

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchPosts.fulfilled]: (state,action) => {
            state.status = 'success'
            state.posts = action.payload
        },
        [fetchPosts.rejected]: (state,action) => {
            state.status = 'failed'
            state.error = true
        },
    }
})

export default postsSlice.reducer