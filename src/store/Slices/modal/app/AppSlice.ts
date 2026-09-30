import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
//import { createAsyncThunk } from '@reduxjs/toolkit';
import {type Views} from '@/app/config' ;
import {debugStore} from '@/utils/debug';


interface IApp{
    DropDownHeaderValue: string;
    ViewState: Views;
}

const appSliceInit: IApp = {
    DropDownHeaderValue: 'cards',
    ViewState: 'cards',
}

export const appSlice = createSlice({
    name: 'AppState',
    initialState: appSliceInit,
    reducers: {
        setDropDownHeaderValue: (state, action: PayloadAction<string>) => {
            debugStore("AppState", `setDropDownHeaderValue -> Payload (${action.payload})`);
            state.DropDownHeaderValue = action.payload;
            state.ViewState = action.payload as Views;
        }
    }
});


export const appActions = appSlice.actions;
export const appReducer = appSlice.reducer;

