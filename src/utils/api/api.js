const mainUrl = 'https://norma.nomoreparties.space/api/';
const endPointOrder = 'orders';
const endPointIngredients = 'ingredients';
const endPointLogin = 'auth/login';
const endPointRegistration = 'auth/register';
const endPointForgotPassword = 'password-reset';
const endPointResetPassword = 'password-reset/reset';



const defaultHeaders = {
  'Content-Type': 'application/json'
};

const makeFetchOptions = (method, headers, body) => {
  const options = {
    method: !!method ? method : 'GET',
    headers
  };
  if (body) {
    options.body = JSON.stringify(body)
  }
  return options;
}

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return res.json()
  .then(err => {
    console.log(err)
    err.httpCode = res.status;
    return Promise.reject(err);
  })
}

export const fetchIngredients = () => {
  return fetch(mainUrl + endPointIngredients)
  .then(checkResponse);
}

export const postOrder = (ids) => {
  const body = {"ingredients": ids };
  const options = makeFetchOptions('POST', defaultHeaders, body);
  return fetch(mainUrl + endPointOrder, options)
  .then(checkResponse);
}

export const loginUser = (email, password) => {
  const body = {
    "email": email, 
    "password": password 
  };
  const options = makeFetchOptions('POST', defaultHeaders, body);
  return fetch(mainUrl + endPointLogin, options)
  .then(checkResponse);
};

export const registerUser = (name, email, password) => {
  const body = {
    "email": email, 
    "password": password ,
    "name": name
  };
  const options = makeFetchOptions('POST', defaultHeaders, body);
  return fetch(mainUrl + endPointRegistration, options)
  .then(checkResponse);
};

export const forgotPasswordPost = (email) => {
  const body = {
    "email": email
  };
  const options = makeFetchOptions('POST', defaultHeaders, body);
  return fetch(mainUrl + endPointForgotPassword, options)
  .then(checkResponse);
};

export const resetPasswordPost = (password, token) => {
  const body = {
    "password": password,
    "token": token
  };
  const options = makeFetchOptions('POST', defaultHeaders, body);
  return fetch(mainUrl + endPointResetPassword, options)
  .then(checkResponse);
};

