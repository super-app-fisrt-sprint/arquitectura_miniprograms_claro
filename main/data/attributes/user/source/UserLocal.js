module.exports.createUser = createUser;
module.exports.queryUserByUsername = queryUserByUsername;
module.exports.queryCredentials = queryCredentials;
module.exports.loginUser = loginUser;

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

function queryCredentials(key, username,password) {
  try {
    const validate = my.getStorageSync({key: key})
    if (
      validate.data.username === username &&
      validate.data.password === password
    ) {
      return "Credenciales validas";
    } else {
      return "Credenciales incorrectas";
    }
  } catch (error) {
    return "";
  }
}

function loginUser(key, user) {
  try {
    my.setStorageSync({
      key: key,
      data: {
        username: user.username,
        password: user.password
      }
    });
    return true;
  } catch (error) {
    return false;
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