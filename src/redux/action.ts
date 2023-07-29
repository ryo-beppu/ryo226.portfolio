import { Action, ActionCreatorsMapObject } from "redux";

export enum ActionTypes {
  GET_WEATHER_REQUEST = "GET_WEATHER_REQUEST",
  GET_WEATHER_SUCCESS = "GET_WEATHER_SUCCESS",
  GET_WEATHER_FAILURE = "GET_WEATHER_FAILURE",
  CHANGE_STATE = "CHANGE_STATE",
}

export type ActionsType = Action<ActionTypes>;

export const ActionCreators: ActionCreatorsMapObject<ActionsType> = {
  changeState(data: string) {
    return {
      type: ActionTypes.CHANGE_STATE,
      chapter: data,
    };
  },
};
