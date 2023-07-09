import userReducer from 'features/userSlice'
import postsReducer from 'features/postsSlice'

import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {userReducer, postsReducer}
})

export default store