import { HState } from '../runtime/hsm/HSM';

export interface ArEventType {
  EventType: string;
  data?: any;
  EventData?: any;
}

export interface HSMStateData {
  nextState: HState | null;
}

export interface ArSyncSpecHash {
  method : string;
  hex : string;
}

export interface ArSyncSpecDownload {
  name : string;
  hash : ArSyncSpecHash;
  size : number;
  link : string;
}

export interface ArSyncSpecFiles {
  download : ArSyncSpecDownload[];
  ignore : any;
  delete : any;
}

export interface ArSyncSpec {
  meta : any;
  files : any;
}

export type ArFileLUT = { [fileName:string]: string };

export type LUT = { [key: string] : any };

