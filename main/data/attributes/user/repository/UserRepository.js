const UserDataSourceLocal = require("../dataSource/UserDataSourceLocal");
const UserDataSourceRemote = require("../dataSource/UserDataSourceRemote");
const userDatasourceLocal = new UserDataSourceLocal();
const userDatasourceRemote = new UserDataSourceRemote();

module.exports = class UserRepository {
  static instance;
  constructor() {
    if (UserRepository.instance) {
      return UserRepository.instance;
    } else {
      UserRepository.instance = this;
    }
  }
  createUserLocal(user) {
    return userDatasourceLocal.createUser(user);
  }
  queryUserByUsernameLocal(username) {
    return userDatasourceLocal.queryUserByUsername(username);
  }
  createUserRemote(user) {
    return userDatasourceRemote.createUser(user);
  }
  loginUserRemote(login) {
    return userDatasourceRemote.loginUser(login);
  }
  
//Funciones para login
  queryCredentialsUserLocal(username, password) {
    return userDatasourceLocal.queryCredentials(username, password);
  }

  loginUserLocal(login) {
    return userDatasourceLocal.loginUser(login);
  }
};
