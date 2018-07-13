import * as Immutable from "immutable";
import { ReducersMapObject, Action } from "redux";
import { FSA } from "flux-standard-action";
import * as Actions from "./actions";
import { SCREEN_LOGIN } from "../container";

export type ScreenStateProps = {
  root: string | undefined;
};
class ScreenState extends Immutable.Record({
  root: undefined
} as ScreenStateProps) {

  public readonly root: string;

  constructor(root?: string) {
    root ? super({ root }) : super();
  }
}

export function screen(state: ScreenState = new ScreenState(), action: FSA<any>): ScreenState {
  switch (action.type) {
    case Actions.APP_ROOT_CHANGED:
      return changeScreen(state, action.payload as string);
    default:
      return state;
  }
}

export function counter(state: number = 0, action: FSA<any>): number {
  console.log(`counter(type=${action.type})`);
  switch (action.type) {
    case Actions.COUNT_INCREMENT:
      return state + 1;
    case Actions.COUNT_DECREMENT:
      return state - 1;
  }
  return state;
}

function changeScreen(state: ScreenState, root: string) {
  return state.withMutations(s => s.set("root", root)) as ScreenState;
}

export const reducers = {
  screen,
  counter
};