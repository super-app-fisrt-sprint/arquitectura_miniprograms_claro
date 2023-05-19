const UserRepository = require('../data/attributes/user/repository/UserRepository');
const User = require('../data/attributes/user/entities/User')

function signUp(username,name,lastname,password) {
  const userRepository = new UserRepository();
  let queryUser = userRepository.queryUserByUsernameLocal(username);
  let response = "";
  switch (queryUser) {
    case "El usuario ya existe":
      response = false;
      break;
    case "El usuario NO existe":
      if (userRepository.createUserLocal(newUser(username, name, lastname,password))) {
        response = true;
      } else {
        response = false;
      }
      break;
    default:
      if (userRepository.createUserLocal(newUser(username, name, lastname,password))) {
        response = true;
      } else {
        response = false;
      }
  }
  return response;
}

function newUser(username, name, lastname, password) {
  return new User(username, name, lastname, password);
}

module.exports.signUp = signUp;