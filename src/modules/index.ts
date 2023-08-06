import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";
import { combineReducers } from "@reduxjs/toolkit";
import { reducer as uiReducer, actions as uiActions } from "./ui";

export const actions = {
  ...uiActions,
};

export const rootReducer = combineReducers({
  ui: uiReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
