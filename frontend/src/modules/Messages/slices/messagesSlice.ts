import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_ROUTES } from "../../../shared/utils/enums";
import { IMessage } from "../types/types";

//todo переделать на сущности ?

type Messages = { list: Array<IMessage>}

const initialState: Messages = {
    list: [],
};
  
const messagesSlice = createSlice({
    name: "channels",
    initialState,
    reducers: {
        addNewMessage: (state, action) => {
            state.list.push(action.payload);
        }
    },
});

export const { addNewMessage } = messagesSlice.actions;
export default messagesSlice.reducer;