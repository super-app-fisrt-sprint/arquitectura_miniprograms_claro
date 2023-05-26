const userViewModel = require("../main/domain/userViewModel");
const User = require("../main/data/attributes/user/entities/User");
const UserRepository = require("../main/data/attributes/user/repository/UserRepository");
const { login, signUp } = require("../main/domain/userViewModel");

function createNewUserMock() {
  return new User("test_user", "test", "test", "password");
}

describe("Grupo de pruebas para la funcionalidad de registro", () => {
  //Caso de prueba 01
  test("Cuando el usuario ya existe,sigUp() debe retornar un false", () => {
    let value = createNewUserMock();
    expect(
      userViewModel.signUp(
        value.username,
        value.name,
        value.lastname,
        value.password
      )
    ).toBe(false);
  });
  //Caso de prueba 02
  test("Prueba de registro exitoso", () => {
    const userRepository = new UserRepository();
    const mockQueryUserByUsernameLocal = jest
      .fn()
      .mockReturnValue("El usuario NO existe");
    const mockCreateUserLocal = jest.fn().mockReturnValue(true);
    userRepository.queryUserByUsernameLocal = mockQueryUserByUsernameLocal;
    userRepository.createUserLocal = mockCreateUserLocal;

    const result = signUp("testuser", "Test", "User", "password");

    expect(mockQueryUserByUsernameLocal).toHaveBeenCalledWith("testuser");
    expect(mockCreateUserLocal).toHaveBeenCalledWith(
      new User("testuser", "Test", "User", "password")
    );
    expect(result).toBe(true);
  });
});

describe("Grupo de pruebas de la funcionalidad de inicio de sesión", () => {
  //Caso de prueba 01
  test("Prueba de inicio de sesión de credenciales válidas", () => {
    const username = "valid_username";
    const password = "valid_password";
    const userRepository = new UserRepository();
    userRepository.queryCredentialsUserLocal = jest
      .fn()
      .mockReturnValue("Credenciales validas");
    userRepository.loginUserLocal = jest.fn().mockReturnValue(true);
    const result = login(username, password);
    expect(result).toBe(true);
  });

  //Caso de prueba 02
  test("Prueba inicio de sesión de usuario simulado", () => {
    const username = "valid_username";
    const password = "valid_password";
    const userRepository = new UserRepository();
    userRepository.queryCredentialsUserLocal = jest
      .fn()
      .mockReturnValue("Credenciales validas");
    userRepository.loginUserLocal = jest.fn().mockReturnValue(true);
    const result = login(username, password);
    expect(userRepository.queryCredentialsUserLocal).toHaveBeenCalled();
    expect(userRepository.loginUserLocal).toHaveBeenCalled();
  });

  //Caso de prueba 03
  test("Prueba de inicio de sesión de credenciales no válidas", () => {
    const username = "invalid_username";
    const password = "invalid_password";
    const userRepository = new UserRepository();
    userRepository.queryCredentialsUserLocal = jest
      .fn()
      .mockReturnValue("Credenciales incorrectas");
    const result = login(username, password);
    expect(result).toBe(false);
  });
});
