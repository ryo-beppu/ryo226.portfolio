import { Reducer } from "redux";
import { ActionTypes } from "./action";
import { WeatherProp } from "../components/Common/CommonInterface";

interface State {
  isFetching: boolean;
  payload: WeatherProp[];
  chapter: string;
}

const initalState: State = {
  isFetching: false,
  payload: [],
  chapter: "Opening",
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
    case ActionTypes.CHANGE_STATE:
      return {
        ...state,
        chapter: action.chapter,
      };
    default:
      return state;
  }
};

export default reducer;
