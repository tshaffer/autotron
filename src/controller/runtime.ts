import { isNil } from 'lodash';

// import {
//   // BsDmThunkAction,
//   dmOpenSign,
// } from '@brightsign/bsdatamodel';

import * as fs from 'fs-extra';
import isomorphicPath from 'isomorphic-path';

// import PlatformService from '../platform';

import { ArSyncSpec, ArFileLUT, ArSyncSpecDownload } from '../type/runtime';

// TEDTODO
const srcDirectory = '/Users/tedshaffer/Desktop/ag';

// import { BsUiModelState } from '../..';

// -----------------------------------------------------------------------
// Controller Methods
// -----------------------------------------------------------------------

export const initRuntime = () => {
  return ((dispatch: any) => {
    debugger;
    return getPresentationFiles();
  });
};

// getPresentationFiles
//    getSyncSpec
//    getPoolFiles
//    getAutoscheduleFile

function getPresentationFiles(): Promise<any> {
  return getSyncSpec()
    .then((syncSpec: ArSyncSpec) => {
      const poolFilePath = getPoolFilePath();
      const assetFiles: ArFileLUT = getPoolAssetFiles(syncSpec, poolFilePath);
      console.log(assetFiles);
      return Promise.resolve();
    });
}


function getSyncSpec(): Promise<any> {
  return getSyncSpecFilePath()
    .then((syncSpecFilePath: string | null) => {
      if (!syncSpecFilePath) {
        // TEDTODO - error object
        return Promise.reject('no sync spec found');
      }
      else {
        return Promise.resolve(readSyncSpec(syncSpecFilePath));
      }
    });
}

function readSyncSpec(syncSpecFilePath: string): Promise<ArSyncSpec> {

  return fs.readFile(syncSpecFilePath, 'utf8')
    .then((syncSpecStr: string) => {
      const syncSpec: ArSyncSpec = JSON.parse(syncSpecStr);
      return Promise.resolve(syncSpec);
    });
}

function getPoolAssetFiles(syncSpec: ArSyncSpec, pathToPool: string): ArFileLUT {

  const poolAssetFiles: ArFileLUT = {};

  syncSpec.files.download.forEach((syncSpecFile: ArSyncSpecDownload) => {
    poolAssetFiles[syncSpecFile.name] = isomorphicPath.join(pathToPool, syncSpecFile.link);
  });

  return poolAssetFiles;
}


function getSyncSpecFilePath(): Promise<string | null> {
  return getLocalSyncSpec()
    .then((localSyncSpecFilePath) => {
      if (isNil(localSyncSpecFilePath)) {
        return getNetworkedSyncSpec();
      }
      else {
        return Promise.resolve(localSyncSpecFilePath);
      }
    });
}

function getNetworkedSyncSpec(): Promise<string | null> {
  const filePath: string = getNetworkedSyncSpecFilePath();
  return fs.pathExists(filePath)
    .then((exists: boolean) => {
      if (exists) {
        return Promise.resolve(filePath);
      }
      else {
        return Promise.resolve(null);
      }
    });
}

function getLocalSyncSpec(): Promise<string | null> {
  const filePath: string = getLocalSyncSpecFilePath();
  return fs.pathExists(filePath)
    .then((exists: boolean) => {
      if (exists) {
        return Promise.resolve(filePath);
      }
      else {
        return Promise.resolve(null);
      }
    });
}

function getLocalSyncSpecFilePath(): string {
  // return isomorphicPath.join(PlatformService.default.getRootDirectory(), 'local-sync.json');
  return isomorphicPath.join(getRootDirectory(), 'local-sync.json');
}

function getNetworkedSyncSpecFilePath(): string {
  // return isomorphicPath.join(PlatformService.default.getRootDirectory(), 'current-sync.json');
  return isomorphicPath.join(getRootDirectory(), 'current-sync.json');
}

function getPoolFilePath(): string {
  // return isomorphicPath.join(PlatformService.default.getRootDirectory(), 'pool');
  return isomorphicPath.join(getRootDirectory(), 'pool');
}

function getRootDirectory(): string {
  return srcDirectory;
}

