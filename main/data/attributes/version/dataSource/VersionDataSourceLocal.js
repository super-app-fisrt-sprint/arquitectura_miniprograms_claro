const versionLocal = require('../source/VersionLocal');
const key = require('../../../config/local/Keys');

module.exports = class VersionDataSourceLocal {
  static instance;
  constructor () {
    if (VersionDataSourceLocal.instance) {
      return VersionDataSourceLocal.instance
    } else {
        VersionDataSourceLocal.instance = this
    }
  }
  queryLastVersion() {
    return versionLocal.lastVersion(key.TYPE.APP_INFO);
  }
  insertVersion(version){
    return versionLocal.insertVersion(key.TYPE.APP_INFO,version);
  }
  deleteVersion(){
    return versionLocal.deleteVersion(key.TYPE.APP_INFO);
  }
} 