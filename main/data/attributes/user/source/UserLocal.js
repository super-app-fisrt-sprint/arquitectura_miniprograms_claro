module.exports.createUser = createUser;
module.exports.queryUserByUsername = queryUserByUsername;

function queryUserByUsername(key, username) {
  try {
    if (my.getStorageSync({ key: key }).data.username == username) {
      return "El usuario ya existe";
    } else {
      return "El usuario NO existe";
    }
  } catch (error) {
    return "";
  }
}

function createUser(key,user) {
  try {
    my.setStorageSync({
      key: key,
      data: {
        username: user.username,
        name: user.name,
        lastname: user.lastname,
        password: user.password
      }
    });
    return true;
  } catch (error) {
    return false;
  }
}