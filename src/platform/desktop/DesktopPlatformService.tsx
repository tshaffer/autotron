// const srcDirectory = '/Users/tedshaffer/Desktop/bacInteractive/publish';
// const srcDirectory = '/Users/tedshaffer/Desktop/baconNonInteractive';
const srcDirectory = '/Users/tedshaffer/Desktop/ag';

class DesktopPlatformService {

  static initialize() : void {
    console.log('DesktopPlatformService.initialize()');
  }

  static getRootDirectory(): string {
    return srcDirectory;
  }

  static getTmpDirectory(): string {
    return srcDirectory;
  }

  static getPathToPool(): string {
    return srcDirectory;
  }

}

export default DesktopPlatformService;
