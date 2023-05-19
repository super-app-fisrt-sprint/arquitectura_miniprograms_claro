const userLocal = require('../source/UserLocal');
const key = require('../../../config/local/Keys');

module.exports = class UserDataSourceLocal {
  static instance;
  constructor () {
    if (UserDataSourceLocal.instance) {
      return UserDataSourceLocal.instance
    } else {
        UserDataSourceLocal.instance = this
    }
  }
  queryUserByUsername(username) {
    return userLocal.queryUserByUsername(key.TYPE.USER,username)
  }
  createUser(user){
    return userLocal.createUser(key.TYPE.USER,user);
  }
} 