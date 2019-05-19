import { ZoneHSM } from "./zoneHSM";
import { MediaHState } from "./mediaHState";
import { DmMediaState } from "@brightsign/bsdatamodel";
import { HSMStateData, ArEventType } from "../../type/runtime";
import { setActiveMediaState } from "../../index";

export default class ImageState extends MediaHState {

  stateMachine: ZoneHSM;

  constructor(zoneHSM: ZoneHSM, mediaState: DmMediaState) {
    super(zoneHSM, mediaState.id);

    this.mediaState = mediaState;

    this.superState = zoneHSM.stTop;

    this.HStateEventHandler = this.STDisplayingImageEventHandler;
  }
  
  STDisplayingImageEventHandler(event: ArEventType, stateData: HSMStateData): string {

    if (event.EventType === 'ENTRY_SIGNAL') {
      console.log(this.id + ': entry signal');
      this.stateMachine.autotronStore.dispatch(setActiveMediaState(this.stateMachine.id, this.id));
      this.launchTimer();
      return 'HANDLED';
    } else if (event.EventType === 'EXIT_SIGNAL') {
      this.mediaHStateExitHandler();
    } else {
      return this.mediaHStateEventHandler(event, stateData);
    }

    stateData.nextState = this.superState;
    return 'SUPER';
  }

}