import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { currentWeatherApi } from './apis/weatherApi';
import { coordReducer } from './slices';

export const store = configureStore({
    reducer: {
        [currentWeatherApi.reducerPath]: currentWeatherApi.reducer,
        coord: coordReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(currentWeatherApi.middleware);
    },
});

setupListeners(store.dispatch);

export { useFetchCurrentWeatherQuery } from './apis/weatherApi';
export { changeCoord } from './slices';

export type RootState = ReturnType<typeof store.getState>;
