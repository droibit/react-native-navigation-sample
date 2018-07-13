// ref. https://github.com/keri4141/React-Native-Navigation-Redux-Example/blob/master/src/actions/index.js

import { FSA } from "flux-standard-action";
import { ActionCreator, Dispatch, Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { SCREEN_LOGIN, SCREEN_MAIN } from "../container";

export const APP_INITIALIZED = "APP_INITIALIZED";
export const APP_ROOT_CHANGED = "APP_ROOT_CHANGED";

export const COUNT_INCREMENT = "COUNT_INCREMENT";
export const COUNT_DECREMENT = "COUNT_DECREMENT";

export const changeAppRoot: ActionCreator<FSA<string>> = (root: string) => {
  return {
    type: APP_ROOT_CHANGED,
    payload: root
  };
};

export const appInitialized: ActionCreator<ThunkAction<Promise<void>, any, any, Action>> = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(changeAppRoot(SCREEN_LOGIN));
  };
};

export const login: ActionCreator<ThunkAction<void, any, any, Action>> = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch(changeAppRoot(SCREEN_MAIN));
  };
};

export const incrementCount: ActionCreator<FSA<any>> = () => {
  return {
    type: COUNT_INCREMENT,
  };
};

export const decrementCount: ActionCreator<FSA<any>> = () => {
  return {
    type: COUNT_DECREMENT,
  };
};