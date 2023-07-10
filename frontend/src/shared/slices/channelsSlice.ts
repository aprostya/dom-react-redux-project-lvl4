import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_ROUTES } from "../utils/enums";
import { IChannel } from "../../types/channels";

//todo переделать на сущности ?

type Channels = { list: Array<IChannel>, status: string}

const initialState: Channels = {
    list: [],
    status: "idle"
};
  
export const fetchChannels = createAsyncThunk(
    "channels/fetchTasks",
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
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchChannels.fulfilled, (state, action) => {
            state.list = action.payload.channels;
        });
    },
});

export default channelsSlice.reducer;