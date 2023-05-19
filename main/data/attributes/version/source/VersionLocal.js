module.exports.lastVersion = lastVersion;
module.exports.insertVersion = insertVersion;
module.exports.deleteVersion = deleteVersion;

function lastVersion(key) {
  try {
    return my.getStorageSync({ key: key }).data.name;
  } catch (error) {
    return "";
  }
}

function insertVersion(key,version) {
  try {
    my.setStorageSync({
      key: key,
      data: {
        name: version.name,
        code: version.code,
        data: version.date,
      }
    });
    return true;
  } catch (error) {return false;}
}

function deleteVersion(key) {
  try {
    my.removeStorageSync({
      key: key,
    });
    return true;
  } catch (error) {return false;}
  
}