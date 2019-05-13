let platform : string;

platform = 'desktop';

// platform = 'brightsign';

let loadedModule : any = null;
if(platform === 'brightsign'){
  loadedModule = require('./brightsign/index.tsx');
}else{
  loadedModule = require('./desktop/index.tsx');
}
loadedModule.default.initialize();

export default loadedModule;
