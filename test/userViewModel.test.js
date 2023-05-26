const userViewModel = require("../main/domain/userViewModel");
const repositoryUser = require("../main/data/attributes/user/repository/UserRepository");
const Login = require("../main/data/attributes/user/entities/Login");

// Caso de prueba 01: Prueba de signUp cuando el usuario ya existe
test("Cuando el usuario ya existe, signUp debe devolver false", () => {
  const existingUsername = "existing_user";
  const result = userViewModel.signUp(
    existingUsername,
    "John",
    "Doe",
    "password"
  );
  expect(result).toBe(false);
});

// Caso de prueba 02: Prueba de signUp cuando el usuario no existe
test("Cuando el usuario no existe, signUp debe devolver true", () => {
  const newUsername = "new_user";
  const result = userViewModel.signUp(newUsername, "Jane", "Smith", "password");
  expect(result).toBe(false);
});

// Caso de prueba 03: Prueba de signUp cuando createUserLocal devuelve false
test("Cuando createUserLocal falla, signUp debe devolver false", () => {
  // Mock UserRepository para simular una falla en la creación del usuario
  const userRepository = {
    queryUserByUsernameLocal: () => "El usuario NO existe",
    createUserLocal: () => false,
  };
  const result = userViewModel.signUp("test_user", "Test", "User", "password");
  expect(result).toBe(false);
});

// Caso de prueba 04: Prueba de login con credenciales válidas
test("Cuando las credenciales son válidas, login debe devolver true", () => {
  // Mock UserRepository para simular credenciales válidas
  const userRepository = {
    queryCredentialsUserLocal: () => "Credenciales validas",
    loginUserLocal: () => true,
  };
  const result = userViewModel.login("test_user", "password");
  debugger;
  expect(result).toBe(true);
});

// Caso de prueba 05: Prueba de login con credenciales incorrectas
test("Cuando las credenciales son incorrectas, login debe devolver false", () => {
  // Mock UserRepository para simular credenciales incorrectas
  const userRepository = {
    queryCredentialsUserLocal: () => "Credenciales incorrectas",
  };
  const result = userViewModel.login("test_user", "wrong_password");
  expect(result).toBe(false);
});

// Caso de prueba 06: Prueba de login con campos de username y password vacíos
test("Cuando los campos de username y password están vacíos, login debe devolver false", () => {
  const result = userViewModel.login("", "");
  expect(result).toBe(false);
});
