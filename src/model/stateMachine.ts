import { StateMachineShape } from "../type/runtime";
import { ActionWithPayload } from "./baseAction";

// ------------------------------------
// Constants
// ------------------------------------
export const SET_PLAYBACK_STATE = 'SET_PLAYBACK_STATE';

// ------------------------------------
// Actions
// ------------------------------------

// ------------------------------------
// Reducer
// ------------------------------------
const initialState: StateMachineShape = {
};

export const stateMachineReducer = (
  state: StateMachineShape = initialState,
  action: ActionWithPayload) => {

  switch (action.type) {

  }

  return state;
}
