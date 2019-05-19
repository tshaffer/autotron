import * as React from 'react';

import path = require('path');

// import {
//   ArEventType,
// } from '../types';

// import DesktopPlatformService from '../platform/desktop/DesktopPlatformService';

// import ImageContainer from '../containers/imageContainer';
// import VideoContainer from '../containers/videoContainer';
// import MrssDisplayItemContainer from '../containers/mrssDisplayItemContainer';

// import { getPoolFilePath } from '../utilities/utilities';

import {
  dmGetAssetItemById,
} from '@brightsign/bsdatamodel';
import {BsAssetItem} from "@brightsign/bscore";

import {
  ContentItemType,
  EventType,
} from '@brightsign/bscore';

import {
  BsDmId,
  DmDataFeedContentItem,
  DmDerivedContentItem,
  DmMediaContentItem,
  DmEvent,
  DmEventData,
  DmMediaState,
  DmState,
  DmTimer,
  dmGetMediaStateById,
  dmGetEventIdsForMediaState,
  dmGetEventById,
  DmcEvent,
} from '@brightsign/bsdatamodel';
import { ArEventType } from '../type/runtime';
import { getPoolFilePath } from '../index';

// import { MediaZoneStateProps, MediaZoneDispatchProps } from '../containers/mediaZoneContainer';

export default class MediaZone extends React.Component<MediaZoneStateProps & MediaZoneDispatchProps, object> {

  postBpEvent() {
    const event : ArEventType = {
      EventType : 'bpEvent',
    };
    this.props.postBSPMessage(event);
  }

  postTimeoutEvent()  {
    const event : ArEventType = {
      EventType : 'timeoutEvent',
    };
    this.props.postBSPMessage(event);
  }

  postMediaEndEvent()  {
    const event : ArEventType = {
      EventType : EventType.MediaEnd,
    };
    this.props.postBSPMessage(event);
  }

  renderMediaItem(mediaState : DmMediaState, contentItem: DmDerivedContentItem) {

    const self = this;

    const mediaContentItem : DmMediaContentItem = contentItem as DmMediaContentItem;

    const assetId : string = mediaContentItem.assetId;
    // const assetItem : BsAssetItem = dmGetAssetItemById(this.props.bsdm, { id : assetId }) as BsAssetItem;

    // TODO - near term (likely) fix
    // const fileId : string = assetItem.name;
    const fileId : string = mediaState.name;

    const poolFilePath : string = getPoolFilePath(fileId);
    const src : string = path.join('file://', poolFilePath);

    const mediaType : ContentItemType = mediaContentItem.type;

    switch (mediaType) {
      case 'Image': {
        return (
          <ImageContainer
            width={this.props.width}
            height={this.props.height}
            src={src}
          />
        );
      }
      default: {
        debugger;
      }
    }

    return null;
  }

  getEvents(bsdm : DmState, mediaStateId: string ) : DmEvent[] {

    let events : DmEvent[] = [];

    const eventIds : BsDmId[] = dmGetEventIdsForMediaState(bsdm, { id : mediaStateId });

    events = eventIds.map((eventId) => {
      return dmGetEventById(bsdm, { id : eventId }) as DmcEvent;
    });

    return events;
  }

  render() {

    if (this.props.playbackState !== 'active') {
      return (
        <div>Playback state inactive</div>
      );
    }

    const mediaStateId : string = this.props.activeMediaStateId;
    const mediaState : DmMediaState = dmGetMediaStateById(this.props.bsdm, { id : mediaStateId }) as DmMediaState;
    const contentItem : DmDerivedContentItem = mediaState.contentItem;

    switch (contentItem.type) {
      case'Video':
      case 'Image': {
        return this.renderMediaItem(mediaState, contentItem as DmMediaContentItem);
      }
      default: {
        break;
      }
    }

    return null;
  }
}
