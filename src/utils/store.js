import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import cacheSlice from "./cacheSlice";
import chatSlice from "./chatSlice";


const store = configureStore({
     reducer:{
        app:appSlice,
        search:cacheSlice,
        chat:chatSlice
     }
});

export default store;
 
