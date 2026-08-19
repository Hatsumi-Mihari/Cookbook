import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import {type RootConf} from '../types/conf'
import {type RootHeader} from '../types/header'
import {type RootContent } from '../types/Content'
import { type RootSearchIndex } from '../types/index_search';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {endpoints} from '../../../public/api/endpoints'
import type { RootIndexTable } from '../types/index_table';

interface IStateApp{
    readyLoad: boolean;
    globalFilterID: number;
    titlePage: string;
    conf: RootConf | null;
    header: RootHeader | null;
    content: RootContent | null;
    index_table: RootIndexTable | null;
    index_search: RootSearchIndex | null;
}

const initialStateApp: IStateApp = {
    readyLoad: false,
    globalFilterID: -1,
    conf: null,
    header: null,
    content: null,
    index_table: null,
    index_search: null,
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

    const responseIndexTable = await fetch(endpoints.CONTENT.INDEX_TABLE);
    if (!responseIndexTable.ok) throw new Error('Error response index table');

    const responseIndexSearch = await fetch(endpoints.CONTENT.INDEX_SEARCH);
    if (!responseIndexTable.ok) throw new Error('Error response index search');

    
    const dataConf: RootConf = await responseConfig.json();
    const dataHeader: RootHeader = await responseContentHeader.json();
    const dataContent: RootContent = await responseContentPage.json();
    const dataIndexTable: RootIndexTable = await responseIndexTable.json();
    const dataIndexSearch: RootSearchIndex = await responseIndexSearch.json();
    console.log(dataContent);
    return [dataConf, dataHeader, dataContent, dataIndexTable, dataIndexSearch];
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
        updatePageTitle: (state, action: PayloadAction<string>) => {
            state.titlePage = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(initApp.fulfilled, (state, action) => {
            state.conf = action.payload[0];
            state.header = action.payload[1];
            state.content = action.payload[2];
            state.globalFilterID = state.header?.header.defaultFilterID;
            state.index_table = action.payload[3];
            state.index_search = action.payload[4];
            state.readyLoad = true;
            console.log(state.content);
        })
        .addCase(initApp.rejected, (state, action) => {
            state.readyLoad = false;
            console.log(1);
        })
    }
});

export const { updateGlobalFilter, updatePageTitle } = sliceStateApp.actions;
export default sliceStateApp.reducer;