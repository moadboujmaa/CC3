import UserReducer from './UserSlice'
import PostReducer from './PostsSlice'
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

const reducer = combineReducers({
    users: UserReducer,
    posts: PostReducer,
})
const store = configureStore({reducer})

export default store;