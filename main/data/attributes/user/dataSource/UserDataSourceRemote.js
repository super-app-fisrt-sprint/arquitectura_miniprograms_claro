const userRemote = require('../source/UserRemote');
const api = require('../../../config/remote/APIs');

module.exports = class UserDataSourceRemote {
  static instance;
  constructor () {
    if (UserDataSourceRemote.instance) {
      return UserDataSourceRemote.instance
    } else {
        UserDataSourceRemote.instance = this
    }
  }
  createUser(user) {
    return userRemote.createUser(api.URL_BASE.IDENTIDAD_DIGITAL,user)
  }
  loginUser(login){
    return userRemote.loginUser(api.URL_BASE.IDENTIDAD_DIGITAL,login)
  }
} 