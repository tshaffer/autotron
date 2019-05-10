import { HState } from '../runtime/hsm/HSM';

export interface ArEventType {
  EventType: string;
  data?: any;
  EventData?: any;
}

export interface HSMStateData {
  nextState: HState | null;
}

