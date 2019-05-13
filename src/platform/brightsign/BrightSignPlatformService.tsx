import APlatformService from '../APlatformService';

class BrightSignPlatformService extends APlatformService {

  static initialize() : void {
    console.log('BrightSignPlatformService.initialize()');
  }

  static getRootDirectory() {
    return '/storage/sd';
  }

  static getPathToPool() {
    return '/sd:/';
  }
}

export default BrightSignPlatformService;
