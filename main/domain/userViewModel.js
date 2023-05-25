const UserRepository = require("../data/attributes/user/repository/UserRepository");
const User = require("../data/attributes/user/entities/User");
const Login = require("../data/attributes/user/entities/Login");

function signUp(username, name, lastname, password) {
  const userRepository = new UserRepository();
  let queryUser = userRepository.queryUserByUsernameLocal(username);
  let response = "";
  switch (queryUser) {
    case "El usuario ya existe":
      response = false;
      break;
    case "El usuario NO existe":
      if (
        userRepository.createUserLocal(
          newUser(username, name, lastname, password)
        )
      ) {
        response = true;
      } else {
        response = false;
      }
      break;
    default:
      if (
        userRepository.createUserLocal(
          newUser(username, name, lastname, password)
        )
      ) {
        response = true;
      } else {
        response = false;
      }
  }
  return response;
}

function login(username, password) {
  const userRepository = new UserRepository();
  let queryCredentialsUser = userRepository.queryCredentialsUserLocal(
    username,
    password
  );
  let response = "";
  switch (queryCredentialsUser) {
    case "Credenciales validas":
      if (userRepository.loginUserLocal(loginUser(username, password))) {
        response = true;
      }
      break;
    case "Credenciales incorrectas":
      response = false;
      break;
    default:
      response = false;
  }
  return response;
}

function newUser(username, name, lastname, password) {
  return new User(username, name, lastname, password);
}

function loginUser(username, password) {
  return new Login(username, password);
}

module.exports.signUp = signUp;
module.exports.login = login;
