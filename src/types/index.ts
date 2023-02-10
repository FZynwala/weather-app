export type ForecastWeather = {
    cod: string;
    message: number;
    cnt: number;
    list: List[];
    city: City;
};

export type CurrentWeather = {
    coord: Coord;
    weather: WeatherDescription[];
    base: string;
    main: Main;
    visibility: number;
    wind: {
        speed: number;
        deg: number;
    };
    clouds: {
        all: number;
    };
    dt: number;
    sys: {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
};

export type Coord = {
    lon: number;
    lat: number;
};

export type WeatherDescription = {
    id: number;
    main: string;
    description: string;
    icon: string;
};

export type City = {
    id: number;
    name: string;
    coord: {
        lat: number;
        lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
};

export type Main = {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level?: number;
    grnd_level?: number;
    humidity: number;
    temp_kf?: number;
};

export type List = {
    dt: number;
    main: Main;
    weather: WeatherDescription[];
    clouds: {
        all: number;
    };
    wind: {
        speed: number;
        deg: number;
        gust: number;
    };
    visibility: number;
    pop: number;
    sys: {
        pod: string;
    };
    dt_txt: string;
};

export enum OpenWeatherUnits {
    STANDARD = 'standard',
    METRIC = 'metric',
    IMPERIAL = 'imperial',
}
