import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { appid, baseApiUrl } from '../../config/config';
import { Coord, CurrentWeather, ForecastWeather, OpenWeatherUnits } from '../../types';

export const currentWeatherApi = createApi({
    reducerPath: 'currentWeather',
    baseQuery: fetchBaseQuery({
        baseUrl: baseApiUrl,
    }),
    endpoints(buldier) {
        return {
            fetchCurrentWeather: buldier.query<CurrentWeather, Coord>({
                query: ({ lat, lon }) => {
                    return {
                        url: '/weather',
                        method: 'GET',
                        params: { lat, lon, appid, units: OpenWeatherUnits.METRIC },
                    };
                },
            }),
            fetchForecastWeather: buldier.query<ForecastWeather, Coord>({
                query: ({ lat, lon }) => {
                    return {
                        url: '/forecast',
                        method: 'GET',
                        params: { lat, lon, appid, units: OpenWeatherUnits.METRIC },
                    };
                },
            }),
        };
    },
});

export const { useFetchCurrentWeatherQuery, useFetchForecastWeatherQuery } = currentWeatherApi;
