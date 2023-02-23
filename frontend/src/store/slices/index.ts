import { createSlice } from '@reduxjs/toolkit';

const coordSlice = createSlice({
    name: 'coord',
    initialState: {
        coord: { lat: 51.117944122480296, lon: 16.99592496936716 },
    },
    reducers: {
        changeCoord(state, action) {
            state.coord = action.payload;
        },
    },
});

export const { changeCoord } = coordSlice.actions;
export const coordReducer = coordSlice.reducer;
