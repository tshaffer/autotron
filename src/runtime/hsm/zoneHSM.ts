import { HSM, HState, STTopEventHandler } from "./HSM";
import { dmGetZoneById, DmZone, DmState, BsDmId, dmGetZoneSimplePlaylist } from "@brightsign/bsdatamodel";
import { Store } from "redux";
import { AutotronState } from "../../index";
import { MediaHState } from "./mediaHState";

export class ZoneHSM extends HSM {

  autotronStore: Store<AutotronState>;
  bsdmZone: DmZone;

  type: string;
  zoneId: string;
  stTop: HState;

  id: string;
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
  initialMediaStateId: string;
  mediaStateIds: BsDmId[];
  mediaStates: MediaHState[];

  constructor(autotronStore: Store<AutotronState>, zoneId: string, dispatchEvent: any) {

    super(dispatchEvent);

    this.autotronStore = autotronStore;
    this.zoneId = zoneId;

    this.stTop = new HState(this, 'Top');
    this.stTop.HStateEventHandler = STTopEventHandler;
    this.topState = this.stTop;

    const bsdm: DmState = autotronStore.getState().bsdm;
    this.bsdmZone = dmGetZoneById(bsdm, { id: zoneId }) as DmZone;

    this.id = this.bsdmZone.id;
    this.name = this.bsdmZone.name;

    this.x = this.bsdmZone.position.x;
    this.y = this.bsdmZone.position.y;
    this.width = this.bsdmZone.position.width;
    this.height = this.bsdmZone.position.height;

    this.initialMediaStateId = this.bsdmZone.initialMediaStateId;
    this.mediaStateIds = dmGetZoneSimplePlaylist(bsdm, { id: zoneId }) as BsDmId[];
  }
}