import { createSlice } from "@reduxjs/toolkit";


const cacheSlice = createSlice({
    name:"search",
    initialState:{},
    reducers:{
        searchResults:(state, action)=>{
            state = Object.assign(state, action.payload);
        }
    },
})
export const {searchResults}  = cacheSlice.actions;
export default cacheSlice.reducer;