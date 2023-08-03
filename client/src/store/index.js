import userReducer from './features/userSlice'

import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {userReducer}
})

export default store