export interface WeatherProps {
  isFetching: boolean;
  payload: WeatherProp;
  chapter: string;
}

export interface WeatherProp {
  dt: number;
  main: {
    temp: number;
    tempMin: number;
    tempMax: number;
    pressure: number;
    seaLevel: number;
    grndLevel: number;
    humidity: number;
    tempKf: number;
  };
  visibility: number;
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  sys?: {
    pod: string;
    sunrise: number;
    sunset: number;
  };
  dtTxt: string;
}
