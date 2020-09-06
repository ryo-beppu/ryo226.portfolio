import axios from "axios";
import { Action, Dispatch, ActionCreatorsMapObject } from "redux";
import { WeatherProp } from "../components/Common/Interface";

export enum ActionTypes {
  GET_WEATHER_REQUEST = "GET_WEATHER_REQUEST",
  GET_WEATHER_SUCCESS = "GET_WEATHER_SUCCESS",
  GET_WEATHER_FAILURE = "GET_WEATHER_FAILURE",
  CHANGE_STATE = "CHANGE_STATE",
}

export type ActionsType = Action<ActionTypes>;

export const ActionCreators: ActionCreatorsMapObject<ActionsType> = {
  getWeatherDataRequest() {
    return {
      type: ActionTypes.GET_WEATHER_REQUEST,
    };
  },
  getWeatherDataSuccess(data: WeatherProp[]) {
    return {
      type: ActionTypes.GET_WEATHER_SUCCESS,
      payload: data,
    };
  },
  getWeatherDataFailure(error: string) {
    return {
      type: ActionTypes.GET_WEATHER_FAILURE,
      error,
    };
  },
  changeState(data: string) {
    return {
      type: ActionTypes.CHANGE_STATE,
      chapter: data,
    };
  },
};

export const getWeatherData = () => {
  return async (dispatch: Dispatch): Promise<Action> => {
    dispatch(ActionCreators.getWeatherDataRequest());
    try {
      const res = await axios.get<WeatherProp[]>(
        "https://api.openweathermap.org/data/2.5/weather?q=Yokohama,jp&units=metric&appid=bf2836e4b535547b1e7b8f0c3844db4f"
      );
      return dispatch(ActionCreators.getWeatherDataSuccess(res.data));
    } catch (err) {
      return dispatch(ActionCreators.getWeatherDataFailure(err));
    }
  };
};
