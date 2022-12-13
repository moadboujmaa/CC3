import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
    const response = await axios.get('https://dummyjson.com/posts')
    return response.data
})

const PostsSlice = createSlice({
	name: 'posts',
	initialState: {
        data: [],
        error: null,
        loading: 'idle'
    },
	reducers: {},
	extraReducers: (builder) => {
        builder.addCase(getPosts.pending, (state, action) => {
            if (state.loading === 'idle') {
                state.loading = 'loading'
            }
        })
        builder.addCase(getPosts.fulfilled, (state, action) => {
            if (state.loading === 'loading') {
                state.loading = 'idle'
                state.data = action.payload
            }
        })
        builder.addCase(getPosts.rejected, (state, action) => {
            if (state.loading === 'loading') {
                state.loading = 'idle'
                state.error = "Error"
            }
        })
    }
})

export default PostsSlice.reducer