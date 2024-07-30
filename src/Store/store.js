import {configureStore} from "@reduxjs/toolkit"
import { counterReducer, titleReducer } from "./Slices/slice"

const store = configureStore({
    reducer:{
        counter:counterReducer,
        title:titleReducer
    }
})

export default store