import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_ROUTES } from "../../../shared/utils/enums";
import { IChannel } from "../types/types";

//todo переделать на сущности ?

type Channels = { list: Array<IChannel>, messages: Array<any>, status: string, currChannel: IChannel}

const initialState: Channels = {
    list: [],
    messages: [],
    status: "idle",
    currChannel: null
};
  
export const fetchChatData = createAsyncThunk(
    "channels/fetchChatDataInfo",
    async (token: string) => {
        const response = await axios.get(API_ROUTES.DATA, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return response.data;
    },
);

const channelsSlice = createSlice({
    name: "channels",
    initialState,
    reducers: {
        changeCurrentChannel: (state, action) => {
            state.currChannel = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchChatData.fulfilled, (state, action) => {
            state.list = action.payload.channels;
            state.messages = action.payload.messages;
        });
    },
});

export const { changeCurrentChannel } = channelsSlice.actions;
export default channelsSlice.reducer;