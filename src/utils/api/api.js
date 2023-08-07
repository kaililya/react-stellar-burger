const mainUrl = 'https://norma.nomoreparties.space/api/';
const endPointOrder = 'orders';
const endPointIngredients = 'ingredients';
const endPointLogin = 'auth/login';
const endPointLogouting = 'auth/logout';
const endPointRegistration = 'auth/register';
const endPointForgotPassword = 'password-reset';
const endPointResetPassword = 'password-reset/reset';
const endPointRefreshToken = 'auth/token';
const endPointGetUserData = 'auth/user';
const endPointUpdateUserData = 'auth/user';


const fetchWithRefresh = async (url, options) => {
  try {
    const res = await fetch(url, options);
    console.log('1111')
    return await checkResponse(res);
  } catch (err) {
    console.log('22222')
    if (err.message === "jwt expired" || err.status === '401') {
      console.log('333')

      const refreshData = await refreshTokenPost(localStorage.getItem("refreshToken"));
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      console.log('4444')

      localStorage.setItem("accessToken", refreshData.accessToken);
      localStorage.setItem("refreshToken", refreshData.refreshToken);
      options.headers.authorization = refreshData.accessToken;
      const res = await fetch(url, options);
      return await checkResponse(res);
    } else {
      return Promise.reject(err);
    }
  }
};

const defaultHeaders = {
  'Content-Type': 'application/json'
};

const authorizationHeader = (token) => {
  return {
  'Content-Type': 'application/json',
  "authorization": token
  };
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

export const logoutUser = (refreshToken) => {
  const body = {
    "token": refreshToken
  };
  const options = makeFetchOptions('POST', defaultHeaders, body);
  return fetch(mainUrl + endPointLogouting, options)
  .then(checkResponse);
};

export const refreshTokenPost = (refreshToken) => {
  const body = {
    "token": refreshToken
  };
  const options = makeFetchOptions('POST', defaultHeaders, body);
  return fetch(mainUrl + endPointRefreshToken, options)
  .then(checkResponse);
};

export const getUserData = (token) => {
  const properties = authorizationHeader(token);
  const options = makeFetchOptions('GET', properties, false);
  return fetchWithRefresh(mainUrl + endPointGetUserData, options)
  // .then(checkResponse);
  
};


export const patchUserData = (name, email, password, token) => {
  const properties = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      "authorization": token
    },
    body: JSON.stringify({
      "email": email,
      "name": name,
      "password": password
    })
  };
  return fetch(mainUrl + endPointUpdateUserData, properties)
  .then(checkResponse);
};