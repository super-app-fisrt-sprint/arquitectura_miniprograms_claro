// Definición de variables a utilizar para las pruebas unitarias
const versionViewModel = require('../main/domain/versionViewModel');
const Version = require('../main/data/attributes/version/entities/Version');
//Métodos que son necesarios para la construcción de data o validación
function createNewVersionMock() {
  return new Version("1.0.0",1,"17-05-2023");
}
//Metodos para inicializar o finalizar instancias
beforeEach(() => {
  
});
afterEach(() => {
  //Finalziar instancias
});
//Caso de prueba 01
test('Cuando no exista ninguan versión, newVersion()Debe retornar un objeto tipo Version', () => {
  let value = createNewVersionMock()
  expect(versionViewModel.newVersion()).toBe(value);
});
//Caso de prueba 02
test('Ejemplo test fallido', () => {
  let value = "prueba";
  expect(versionViewModel.newVersion()).toBe(value);
});