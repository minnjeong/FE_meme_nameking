import { configureStore } from "@reduxjs/toolkit";
import { isDev } from "../modules";

const store = configureStore({
    reducer : {

    },
    devTools : isDev,
})

export default store