// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../react
//   ../@brightsign/bsdatamodel
//   ../redux

import * as React from 'react';
import { DmDerivedContentItem, DmEvent, DmMediaState, DmState, DmZone } from '@brightsign/bsdatamodel';
import { DmState, DmcZone } from '@brightsign/bsdatamodel';
import { Store } from 'redux';
import { Action } from 'redux';
import { Dispatch, ActionCreator } from 'redux';
import { Reducer } from 'redux';
import { DmState } from '@brightsign/bsdatamodel';

/** @module Controller:index */

/** @module Model:index */

/** @module Selector:index */

/** @module Types:index */

/** @internal */
export interface ImageProps {
    src: string;
    width: number;
    height: number;
}
export class ImageComponent extends React.Component<ImageProps> {
    render(): JSX.Element;
}
export const Image: React.ComponentClass<any> & {
    WrappedComponent: React.ComponentType<ImageProps>;
};

/** @internal */
export interface MediaZoneProps {
    key: string;
    playbackState: string;
    bsdm: DmState;
    zone: DmZone;
    width: number;
    height: number;
    activeMediaStateId: string;
    postBSPMessage: any;
}
export default class MediaZoneComponent extends React.Component<MediaZoneProps> {
    renderMediaItem(mediaState: DmMediaState, contentItem: DmDerivedContentItem): JSX.Element | null;
    getEvents(bsdm: DmState, mediaStateId: string): DmEvent[];
    render(): JSX.Element | null;
}
export const MediaZone: React.ComponentClass<any> & {
    WrappedComponent: React.ComponentType<MediaZoneProps>;
};

/** @internal */
export interface TemplateProps {
    color: BsUiModelTemplatePropertyColorState;
    onInitModel: () => any;
    onInitRuntime: () => any;
    onResetModel: () => any;
    onUpdateTemplateColorAsync: () => any;
    onUpdateTemplateColorBatch: () => any;
}
export class TemplateComponent extends React.Component<TemplateProps> {
    componentDidMount(): void;
    componentWillUnmount(): void;
    renderComponent(): JSX.Element;
    renderModel(): JSX.Element;
    renderController(): JSX.Element;
    renderType(): JSX.Element;
    renderError(): JSX.Element;
    renderHeader(): JSX.Element;
    renderBody(): JSX.Element;
    render(): JSX.Element;
}
export const Template: React.ComponentClass<Pick<TemplateProps, never> & undefined> & {
    WrappedComponent: React.ComponentType<TemplateProps>;
};

/** @internal */
export interface SignProps {
    bsdm: DmState;
    playbackState: string;
}
export class SignComponent extends React.Component<SignProps> {
    getMediaZoneJSX(zone: DmcZone): object;
    getZoneJSX(zoneId: string): object | null;
    render(): JSX.Element;
}
export const Sign: React.ComponentClass<Pick<SignProps, "playbackState" | "bsdm"> & undefined> & {
    WrappedComponent: React.ComponentType<SignProps>;
};

export let myApp: {};
export const App: React.ComponentClass<Pick<{
    bsdm: any;
    playbackState: any;
    activeMediaStates: any;
} & {
    setPlaybackState: (playbackState: string) => {
        type: string;
        payload: string;
    };
}, never>> & {
    WrappedComponent: React.ComponentType<{
        bsdm: any;
        playbackState: any;
        activeMediaStates: any;
    } & {
        setPlaybackState: (playbackState: string) => {
            type: string;
            payload: string;
        };
    }>;
};

export const initModel: () => BsUiModelThunkAction<Promise<any>>;
export const resetModel: () => BsUiModelThunkAction<BsUiModelAction<null>>;

/** @private */
export const updateTemplateColorAsync: () => BsUiModelThunkAction<Promise<any>>;
/** @private */
export const updateTemplateColorBatch: () => BsUiModelThunkAction<BsUiModelBatchAction>;

export function initRuntime(store: Store<AutotronState>): (dispatch: any, getState: Function) => Promise<void>;
export function getRuntimeFiles(): Promise<void>;
export function getPoolFilePath(fileName: string): string;
export function postRuntimeMessage(event: ArEventType): void;
export function postMessage(event: ArEventType): void;

export const SET_ACTIVE_MEDIA_STATE = "SET_ACTIVE_MEDIA_STATE";
export function setActiveMediaState(zoneId: string, mediaStateId: string): {
    type: string;
    payload: {
        zoneId: string;
        mediaStateId: string;
    };
};
export const activeMediaStateReducer: (state: ActiveMediaStatesShape | undefined, action: ActionWithPayload) => ActiveMediaStatesShape;

/** @module Model:base */
/** @private */
export interface ActionWithPayload extends Action {
    payload: any;
}
/** @private */
export const BSUIMODEL_BATCH = "BSUIMODEL_BATCH";
/** @private */
export const BSUIMODEL_REHYDRATE = "BSUIMODEL_REHYDRATE";
/** @private */
export const BSUIMODEL_RESET = "BSUIMODEL_RESET";
/** @private */
export type BsUiModelDispatch = Dispatch<BsUiModelState>;
/** @private */
export interface BsUiModelBaseAction extends Action {
    type: string;
    payload: {};
    error?: boolean;
    meta?: {};
}
/** @private */
export interface BsUiModelAction<T> extends BsUiModelBaseAction {
    payload: T;
}
/** @private */
export type BsUiModelActionCreator<T> = ActionCreator<BsUiModelAction<T>>;
/** @private */
export type BsUiModelThunkAction<T> = (dispatch: BsUiModelDispatch, getState: () => BsUiModelState, extraArgument: undefined) => T;
/** @private */
export const bsUiModelBatchAction: (action: BsUiModelBaseAction[]) => BsUiModelBatchAction;
/** @private */
export interface BsUiModelBatchAction extends Action {
    type: string;
    payload: BsUiModelBaseAction[];
}
/** @private */
export interface RehydrateBsUiModelParams {
    newBsUiModelState: BsUiModelState;
}
/** @private */
export type RehydrateBsUiModelAction = BsUiModelAction<RehydrateBsUiModelParams>;
export const bsUiModelRehydrateModel: (bsUiModelState: BsUiModelState) => BsUiModelAction<RehydrateBsUiModelParams>;
/** @private */
export type ResetBsUiModelAction = BsUiModelAction<null>;
export const bsUiModelResetModel: () => BsUiModelAction<null>;

/** @module Model:base */
export type BsUiReducer = Reducer<BsUiModelState>;
export const bsUiModelReducer: BsUiReducer;
export const isValidBsUiModelState: (state: any) => boolean;
export const isValidBsUiModelStateShallow: (state: any) => boolean;

export const SET_PLAYBACK_STATE = "SET_PLAYBACK_STATE";
export function setPlaybackState(playbackState: string): {
    type: string;
    payload: string;
};
export const stateMachineReducer: (state: StateMachineShape | undefined, action: ActionWithPayload) => {
    playbackState: any;
};

/** @private */
export const templateReducer: (state: BsUiModelTemplateState, action: BsUiModelBatchAction) => BsUiModelTemplateState;
/** @private */
export const isValidTemplateState: (state: any) => boolean;
/** @private */
export const isValidTemplateStateShallow: (state: any) => boolean;

/** @private */
export const BSUIMODEL_UPDATE_TEMPLATE_PROPERTY: string;
/** @private */
export const BSUIMODEL_RESET_TEMPLATE_PROPERTY: string;
/** @private */
export type UpdateTemplatePropertyAction = BsUiModelAction<Partial<BsUiModelTemplatePropertyState>>;
/** @private */
export type ResetTemplatePropertyAction = BsUiModelAction<null>;
/** @private */
export const bsUiModelResetTemplateProperty: () => BsUiModelAction<null>;
/** @private */
export const bsUiModelUpdateTemplateColor: (color: BsUiModelTemplatePropertyColorState) => BsUiModelAction<Partial<BsUiModelTemplatePropertyState>>;
/** @private */
export const templatePropertyDefault: BsUiModelTemplatePropertyState;
/** @private */
export const templatePropertyReducer: (state: BsUiModelTemplatePropertyState | undefined, {type, payload}: BsUiModelAction<null> | BsUiModelAction<RehydrateBsUiModelParams> | BsUiModelAction<Partial<BsUiModelTemplatePropertyState>>) => BsUiModelTemplatePropertyState;
/** @private */
export const isValidColor: (state: any) => boolean;
/** @private */
export const isValidTemplatePropertyState: (state: any) => boolean;
/** @private */
export const isValidTemplatePropertyStateShallow: (state: any) => boolean;

/** @module Selector:base */
/** @private */
export const bsUiModelFilterBaseState: (state: any) => BsUiModelState;
/** @private */
export const bsUiModelGetBaseState: (state: BsUiModelState) => BsUiModelState;

/** @private */
export const bsUiModelGetTemplateState: (state: BsUiModelState) => BsUiModelTemplateState;

/** @private */
export const bsUiModelGetTemplatePropertyState: (state: BsUiModelState) => BsUiModelTemplatePropertyState;
/** @private */
export const bsUiModelGetTemplatePropertyColorState: (state: BsUiModelState) => BsUiModelTemplatePropertyColorState;

/** @module Types:base */
/** @private */
export type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
};
export interface AutotronState {
    bsdm: DmState;
    template: BsUiModelTemplateState;
}
/** @private */
export interface BsUiModelState {
    template: BsUiModelTemplateState;
}
/** @private */
export const createModel: (template: BsUiModelTemplateState) => BsUiModelState;

/** @module Types:template */
/** @private */
export interface BsUiModelTemplateState {
    readonly property: BsUiModelTemplatePropertyState;
}
/** @private */
export const createTemplate: (property: BsUiModelTemplatePropertyState) => BsUiModelTemplateState;

/** @private */
export interface BsUiModelTemplatePropertyColorState {
    a: number;
    r: number;
    g: number;
    b: number;
}
/** @private */
export interface BsUiModelTemplatePropertyState {
    color: BsUiModelTemplatePropertyColorState;
}
/** @private */
export const createTemplateProperty: (color: BsUiModelTemplatePropertyColorState) => BsUiModelTemplatePropertyState;
/** @private */
export const createBsColor: (r: number, g: number, b: number, a: number) => BsUiModelTemplatePropertyColorState;

export enum BsUiErrorType {
    unknownError = 0,
    unexpectedError = 1,
    invalidParameters = 2,
    invalidOperation = 3,
    apiError = 4,
    invalidModel = 5,
}
export class BsUiError extends Error {
    name: string;
    type: BsUiErrorType;
    constructor(type: BsUiErrorType, reason?: string);
}
export function isBsUiError(error: Error): error is BsUiError;

export interface ArEventType {
    EventType: string;
    data?: any;
    EventData?: any;
}
export interface HSMStateData {
    nextState: HState | null;
}
export interface ArSyncSpecHash {
    method: string;
    hex: string;
}
export interface ArSyncSpecDownload {
    name: string;
    hash: ArSyncSpecHash;
    size: number;
    link: string;
}
export interface ArSyncSpecFiles {
    download: ArSyncSpecDownload[];
    ignore: any;
    delete: any;
}
export interface ArSyncSpec {
    meta: any;
    files: any;
}
export type ArFileLUT = {
    [fileName: string]: string;
};
export type LUT = {
    [key: string]: any;
};
export type SubscribedEvents = {
    [eventKey: string]: HState;
};
export type StateMachineShape = {
    playbackState: string;
};
export interface ArState {
    bsdm: DmState;
    stateMachine: StateMachineShape;
    activeMediaStates: ActiveMediaStatesShape;
}

export type ARMediaStateLUT = {
    [zoneId: string]: string;
};
export type ActiveMediaStatesShape = {
    activeMediaStateIdByZone: ARMediaStateLUT;
};

export class HSM {
    dispatchEvent: ((event: ArEventType) => void);
    topState: HState | null;
    activeState: HState | null;
    constructorHandler: (() => void) | null;
    initialPseudoStateHandler: ((args: any) => HState) | null;
    constructor(dispatchEvent: ((event: ArEventType) => void));
    constructorFunction(): void;
    initialize(): void;
    Dispatch(event: ArEventType): void;
}
export class HState {
    topState: null;
    HStateEventHandler: (event: ArEventType, stateData: HSMStateData) => string;
    stateMachine: HSM;
    superState: HState;
    id: string;
    constructor(stateMachine: HSM, id: string);
}
export function STTopEventHandler(_: ArEventType, stateData: HSMStateData): string;

