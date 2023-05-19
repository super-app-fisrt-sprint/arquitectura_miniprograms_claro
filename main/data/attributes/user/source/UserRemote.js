module.exports.createUser = createUser;
module.exports.loginUser = loginUser;

function createUser(api, user) {
  my.request({
    url: api + 'account/create',
    method: 'POST',
    data: {
      username: user.username,
      name: user.name,
      lastname: user.lastname,
      password: user.password
    },
    dataType: 'json',
    success: (result) => {
      // respondera la información del servicio 
      return true;
    },
    fail: () => {
      // respondera la información del servicio  con su error
      return false;
    }
  });
}

function loginUser(api,login) {
  my.request({
    url: api + 'account/login',
    method: 'GET',
    data: {
      username: user.username,
      password: user.password
    },
    dataType: 'json',
    success: (result) => {
      // respondera la información del servicio 
      return true;
    },
    fail: () => {
      // respondera la información del servicio  con su error
      return false;
    }
  });
}