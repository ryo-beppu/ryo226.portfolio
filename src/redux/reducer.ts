import { Reducer } from "redux";
import { ActionTypes } from "./action";
import { WeatherProp } from "../components/Common/CommonInterface";

interface State {
  isFetching: boolean;
  payload: WeatherProp[];
}

const initalState: State = {
  isFetching: false,
  payload: [],
};

const reducer: Reducer<State> = (state: State = initalState, action) => {
  switch (action.type) {
    case ActionTypes.GET_WEATHER_REQUEST:
      return {
        ...state,
        isFetching: true,
        payload: [],
      };
    case ActionTypes.GET_WEATHER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        payload: action.payload,
      };
    case ActionTypes.GET_WEATHER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
