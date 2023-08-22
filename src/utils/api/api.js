import { getUserDataRequestSuccess, setAuthorizationState, setUserData, updateUserDataRequest, updateUserDataRequestFailed, updateUserDataRequestSuccess } from "../../services/actions/user-api-action-creators";

const mainUrl = 'https://norma.nomoreparties.space/api/';
export const mainWSUrl = 'wss://norma.nomoreparties.space/';
const endPointOrder = 'orders';
const endPointIngredients = 'ingredients';
const endPointLogin = 'auth/login';
const endPointLogouting = 'auth/logout';
const endPointRegistration = 'auth/register';
const endPointForgotPassword = 'password-reset';
const endPointResetPassword = 'password-reset/reset';
const endPointRefreshToken = 'auth/token';
const endPointUpdateUserData = 'auth/user';
export const endPointAllOrders = 'orders/all';

const refreshToken = () => {
  return fetch("https://norma.nomoreparties.space/api/auth/token", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken")
    })
  }).then(checkResponse);
};

export const getUser = () => {
  return (dispatch) => {
    return fetchWithRefresh("https://norma.nomoreparties.space/api/auth/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("accessToken")
      }
    }).then((res) => {
      if (res.success) {
        dispatch(getUserDataRequestSuccess(res.user));
      } else {
        return Promise.reject("Ошибка данных с сервера");
      }
    });
  };
};

const fetchWithRefresh = async (url, options) => {
  try {
    const res = await fetch(url, options);
    return await checkResponse(res);
  } catch (err) {
    if (err.message === "jwt expired") {
      const refreshData = await refreshToken();
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
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

export const checkUserAuth = () => {
  return (dispatch) => {
    if (localStorage.getItem("accessToken")) {
      dispatch(getUser())
      .catch((err) => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        dispatch(setUserData(null));
      })
      .finally(() => dispatch(setAuthorizationState(true)));
    } else {
      dispatch(setAuthorizationState(true));
      dispatch(setUserData(null));
    }
  };
};


// export function updateUserDataThunk(name, email, password, token) {
  //   return function(dispatch) {
  //     dispatch(updateUserDataRequest());
  //     patchUserData(name, email, password, token)
  //     .then(({ success, user }) => {
  //       if (success) {
  //         batch(() => {
  //           dispatch(updateUserDataRequestSuccess(user));
  //         });
  //       } else {
  //         throw new Error({ httpCode: 500, message: 'Неизвестная ошибка сервера' });
  //       }  
  //     })
  //     .catch(({ httpCode, message }) => {
  //       const msg = httpCode ? message : 'Не удалось связаться с сервером';
  //       dispatch(updateUserDataRequestFailed(msg));
  //     })
  //   }
  // };

export const updateUserDataThunk2 = (name, email, password) => {

  return function (dispatch) {
    dispatch(updateUserDataRequest());

    fetchWithRefresh(mainUrl + endPointUpdateUserData, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Authorization": localStorage.getItem("accessToken")
      },
      body: JSON.stringify({ name: name, email: email, password: password })
    })
      .then((responseData) => {
        console.log(responseData)
        if (responseData.success) {

          dispatch(updateUserDataRequestSuccess(responseData.user));
        }
      })
      .catch(error => {
        dispatch(updateUserDataRequestFailed(error));
        alert('Ошибка при обновление данных: ' + error);
      });
  };
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
  const options = makeFetchOptions('POST', authorizationHeader(localStorage.getItem("accessToken")), body);
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

// export const getUserData = (token) => {
//   const properties = authorizationHeader(token);
//   const options = makeFetchOptions('GET', properties, false);
//   return fetchWithRefresh(mainUrl + endPointGetUserData, options)
//   .then(checkResponse);
  
// };


// export const patchUserData = (name, email, password, token) => {
//   const properties = {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json;charset=utf-8",
//       "authorization": token
//     },
//     body: JSON.stringify({
//       "email": email,
//       "name": name,
//       "password": password
//     })
//   };
//   return fetch(mainUrl + endPointUpdateUserData, properties)
//   .then(checkResponse);
// };