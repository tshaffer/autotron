// import { BsAutotronModelState } from "../index";
import { BsAutotronState } from "../../index";

// ------------------------------------
// Selectors
// ------------------------------------
export function getActiveMediaStateId(state: BsAutotronState, zoneId: string) {
  const activeMediaStateIdByZone = state.bsAutotron.activeMediaStates.activeMediaStateIdByZone;
  return activeMediaStateIdByZone[zoneId];
}
