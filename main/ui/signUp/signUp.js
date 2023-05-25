const userViewModel = require('../../domain/userViewModel');
const versionViewModel = require('../../domain/versionViewModel');
Page({
  data: {
    username: '',
    name: '',
    lastName: '',
    password: '',
    version: ''
  },
  onUsernameInput(e) {
    this.setData({
      username: e.detail.value
    });
  },
  onNameInput(e) {
    this.setData({
      name: e.detail.value
    });
  },
  onLastNameInput(e) {
    this.setData({
      lastName: e.detail.value
    });
  },
  onPasswordInput(e) {
    this.setData({
      password: e.detail.value
    });
  },
  signUp(){
    if(this.data.username == ""){
      my.alert({
        title: "Campos incompletos",
        content: "El Nombre de usuario se encuentra vacio"
      });
    }else {
      var service = userViewModel.signUp(
        this.data.username,
        this.data.name,
        this.data.lastName,
        this.data.password);
      if (service) {
        my.alert({
          title: "Registro exitoso",
          content: "Sus datos fueron almacenados correctamente"
        });
         my.navigateTo({
           url: "../loginPage/loginPage"
         });
      } else {
        my.alert({
          title: "Registro Fallido",
          content: 'El username ya existe'
        });
      }
    }
  },
  onLoad() {
    this.setData({
      version: versionViewModel.getVersion()
    });
  },
});
