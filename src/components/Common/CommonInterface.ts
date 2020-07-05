export interface WeatherProps {
  isFetching: boolean;
  payload: WeatherProp;
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
  };
  dtTxt: string;
}
