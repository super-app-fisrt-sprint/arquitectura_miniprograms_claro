const userViewModel = require("../../domain/userViewModel");
const versionViewModel = require("../../domain/versionViewModel");
Page({
  data: {
    username: "",
    password: "",
    version: ""
  },
  onUsernameInput(e) {
    this.setData({
      username: e.detail.value
    });
  },
  onPasswordInput(e) {
    this.setData({
      password: e.detail.value
    });
  },
  //Funcion para logearse de manera local
  login() {
    //Verifique en local si exsite el user
    if (this.data.username === "" && this.data.password === "") {
      my.alert({
        title: "Datos incorrectos",
        content: "Verifique la informacion ingresada"
      });
    } else {
      var service = userViewModel.login(this.data.username, this.data.password);
      if (service) {
        my.alert({
          title: "Login exitoso",
          content: "Sesión iniciada correctamente",
          buttonText : "Ok"
        });
        my.navigateTo({
          url: "../pageCompuesto/pageCompuesto"
        });
      } else {
        my.alert({
          title: "Datos incorrectos",
          content: "Verifique su información",
          buttonText: "Ok"
        });
      }
    }
  },
  onLoad() {
    this.setData({
      version: versionViewModel.getVersion()
    });
  }
});
