import { configureStore, ConfigureStore } from "@reduxjs/toolkit";
import auth from "./auth";

const store  =configureStore({

    reducer: {

        auth


    }
})

export default store