import { ArState } from "../type/runtime";

// ------------------------------------
// Selectors
// ------------------------------------
export function getActiveMediaStateId(state: ArState, zoneId: string) {

  const activeMediaStateIdByZone = state.bsUiModel.template.activeMediaState.activeMediaStateIdByZone;
  return activeMediaStateIdByZone[zoneId];
}
