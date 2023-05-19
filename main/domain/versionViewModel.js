const VersionRepository = require('../data/attributes/version/repository/VersionRepository');
const Version = require('../data/attributes/version/entities/Version')

function getVersion() {
  const versionRepository = new VersionRepository();
  if (versionRepository.queryLastVersionLocal() == "") {
    if(!versionRepository.insertVersionLocal(newVersion())){
      return "0.0.0";
    };
  }
  return versionRepository.queryLastVersionLocal();
}

function newVersion() {
  return new Version("1.0.0",1,"17-05-2023");
}

module.exports.getVersion = getVersion;
module.exports.newVersion = newVersion;