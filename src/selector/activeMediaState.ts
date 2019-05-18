import { ArState } from "../type/runtime";

// ------------------------------------
// Selectors
// ------------------------------------
export function getActiveMediaStateId(state : ArState, zoneId : string) {

  const activeMediaStateIdByZone = state.activeMediaStates.activeMediaStateIdByZone;
  return activeMediaStateIdByZone[zoneId];
}
