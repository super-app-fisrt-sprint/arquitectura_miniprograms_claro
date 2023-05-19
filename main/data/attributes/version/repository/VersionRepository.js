const VersionDataSourceLocal = require('../dataSource/VersionDataSourceLocal');
const versionDatasourceLocal = new VersionDataSourceLocal();

module.exports = class VersionRepository {
  static instance;
  constructor () {
    if (VersionRepository.instance) {
      return VersionRepository.instance
    } else {
        VersionRepository.instance = this
    }
  }
  queryLastVersionLocal() {
    return versionDatasourceLocal.queryLastVersion();
  }
  insertVersionLocal(version) {
    return versionDatasourceLocal.insertVersion(version);
  }
  deleteVersionLocal() {
    return versionDatasourceLocal.deleteVersion();
  }
} 