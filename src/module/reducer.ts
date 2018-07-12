import * as Immutable from "immutable";
import { ReducersMapObject, Action } from "redux";
import { FluxStandardAction } from "flux-standard-action";
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

export function screen(state: ScreenState = new ScreenState(), action: FluxStandardAction<any>): ScreenState {
  switch (action.type) {
    case Actions.APP_ROOT_CHANGED:
      return changeScreen(state, action.payload as string);
    default:
      return state;
  }
}

function changeScreen(state: ScreenState, root: string) {
  return state.withMutations(s => s.set("root", root)) as ScreenState;
}

export const reducers  = {
  screen,
}