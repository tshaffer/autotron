import * as React from 'react';

import {
  DmState,
  DmcZone,
  dmGetZoneById,
  dmGetZonesForSign,
} from '@brightsign/bsdatamodel';

export interface SignProps {
  bsdm: DmState;
  playbackState: string;
}

export default class Sign extends React.Component<SignProps, object> {

  getMediaZoneJSX(zone: DmcZone): object {

    return (
      <div
        key={zone.id}
        style={{
          position: 'absolute',
          left: zone.absolutePosition.x,
          top: zone.absolutePosition.y,
          width: zone.absolutePosition.width,
          height: zone.absolutePosition.height,
        }}
      >
        <MediaZoneContainer
          key={zone.id}
          playbackState={this.props.playbackState}
          bsdm={this.props.bsdm}
          zone={zone}
          width={Number(zone.absolutePosition.width)}
          height={Number(zone.absolutePosition.height)}
          activeMediaStateId={''}
        />
      </div>
    );
  }

  getZoneJSX(zoneId: string): object | null {

    const zone: DmcZone = dmGetZoneById(this.props.bsdm, {id: zoneId}) as DmcZone;

    switch (zone.type) {
      case 'VideoOrImages': {
        return this.getMediaZoneJSX(zone);
      }
      default: {
        debugger;
      }
    }

    return null;
  }

  render() {

    const zoneIds: string[] = dmGetZonesForSign(this.props.bsdm);

    return (
      <div>
        {
          zoneIds.map((zoneId) =>
            this.getZoneJSX(zoneId),
          )
        }
      </div>
    );
  }
}
