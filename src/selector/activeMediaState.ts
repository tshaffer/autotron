import { BsAutotronModelState } from "../index";

// ------------------------------------
// Selectors
// ------------------------------------
export function getActiveMediaStateId(state: BsAutotronModelState, zoneId: string) {

  const activeMediaStateIdByZone = state.activeMediaStates.activeMediaStateIdByZone;
  return activeMediaStateIdByZone[zoneId];
}
