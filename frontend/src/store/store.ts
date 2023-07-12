import { configureStore } from "@reduxjs/toolkit";
import channelsReducer from "../modules/Channels/index";
import messagesReducer from "../modules/Messages/index";

const store = configureStore({
    reducer: {
        channels: channelsReducer,
        messages: messagesReducer
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>