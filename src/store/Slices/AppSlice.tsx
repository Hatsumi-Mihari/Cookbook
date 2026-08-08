import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import {type RootConf} from '../types/conf'
import {type RootHeader} from '../types/header'
import {type RootScreen } from '../types/Screen'
import { createAsyncThunk } from '@reduxjs/toolkit';
import {endpoints} from '../../../public/api/endpoints'

interface IStateApp{
    readyLoad: boolean;
    globalFilterID: number;
    conf: RootConf | null;
    header: RootHeader | null;
    content: RootScreen | null;
}

const initialStateApp: IStateApp = {
    readyLoad: false,
    globalFilterID: -1,
    conf: null,
    header: null,
    content: null,
}

export const initApp = createAsyncThunk(
  'app/init',
  async () => {
    const responseConfig = await fetch(endpoints.CONFIG);
    if (!responseConfig.ok) throw new Error('Error response config');

    const responseContentHeader = await fetch(endpoints.CONTENT.HEADER);
    if (!responseContentHeader.ok) throw new Error('Error response content header');

    const responseContentPage = await fetch(endpoints.CONTENT.PAGES);
    if (!responseContentPage.ok) throw new Error('Error response content pages');

    
    const dataConf: RootConf = await responseConfig.json();
    const dataHeader: RootHeader = await responseContentHeader.json();
    const dataContent: RootScreen = await responseContentPage.json();
    return [dataConf, dataHeader, dataContent];
  }
);



export const sliceStateApp = createSlice({
    name: 'AppState',
    initialState: initialStateApp,
    reducers: {
        updateGlobalFilter: (state, action: PayloadAction<number>) => {
            state.globalFilterID = action.payload;
            console.log(state.globalFilterID);
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(initApp.fulfilled, (state, action) => {
            state.conf = action.payload[0];
            state.header = action.payload[1];
            state.content = action.payload[2];
            state.globalFilterID = state.header?.header.defaultFilterID;
            state.readyLoad = true;
            //console.log(state.content);
        })
        .addCase(initApp.rejected, (state, action) => {
            state.readyLoad = false;
            console.log(1);
        })
    }
});

export const { updateGlobalFilter } = sliceStateApp.actions;
export default sliceStateApp.reducer;