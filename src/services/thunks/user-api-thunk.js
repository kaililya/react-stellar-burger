import { batch } from 'react-redux';
import { loginingRuquested, loginingSuccess, loginingFailed, registrationRequest, registrationRequestSeccessed, registrationRequestFailed, forgotingPasswordRequest, forgotingPasswordRequestSuccess, forgotingPasswordRequestFailed, resetingPasswordRequest, resetingPasswordRequestSuccess, resetingPasswordRequestFailed, loginoutingRuquest, loginoutingRuquestSuccess, loginoutingRuquestFailed, refreshTokerRequest, refreshTokerRequestSucces, refreshTokerRequestFailed, getUserDataRequest, getUserDataRequestSuccess, getUserDataRequestFailed, updateUserDataRequest, updateUserDataRequestFailed, updateUserDataRequestSuccess, setAuthorizationState, setUserData } from '../actions/user-api-action-creators';
import { checkResponse, forgotPasswordPost, getUserData, loginUser, logoutUser, patchUserData, refreshTokenPost, registerUser, resetPasswordPost } from '../../utils/api/api';


export function loginUserThunk(email, password) {
  return function(dispatch) {
    dispatch(loginingRuquested());
    loginUser(email, password)
    .then(({ success, user, accessToken, refreshToken}) => {
      if (success) {
        batch(() => {
          dispatch(loginingSuccess({user: user, accessToken: accessToken, refreshToken: refreshToken }));
          localStorage.setItem('refreshToken', refreshToken);
          localStorage.setItem('accessToken', accessToken);
      })} else {
        throw new Error({ httpCode: 500, message: 'Неизвестная ошибка сервера' });
      }  
    })
    .catch(({ httpCode, message }) => {
      const msg = httpCode ? message : 'Не удалось связаться с сервером';
      dispatch(loginingFailed(msg));
    })
  }
};

export function registerUserThunk(name, email, password) {
  return function(dispatch) {
    dispatch(registrationRequest());
    registerUser(name, email, password)
    .then(({ success, accessToken }) => {
      if (success) {
        batch(() => {
          dispatch(registrationRequestSeccessed(accessToken));
        });
      } else {
        throw new Error({ httpCode: 500, message: 'Неизвестная ошибка сервера' });
      }  
    })
    .catch(({ httpCode, message }) => {
      const msg = httpCode ? message : 'Не удалось связаться с сервером';
      dispatch(registrationRequestFailed(msg));
    })
  }
};

export function forgotPasswordThunk(email) {
  return function(dispatch) {
    dispatch(forgotingPasswordRequest());
    forgotPasswordPost(email)
    .then(({ success }) => {
      if (success) {
        batch(() => {
          dispatch(forgotingPasswordRequestSuccess());
        });
      } else {
        throw new Error({ httpCode: 500, message: 'Неизвестная ошибка сервера' });
      }  
    })
    .catch(({ httpCode, message }) => {
      const msg = httpCode ? message : 'Не удалось связаться с сервером';
      dispatch(forgotingPasswordRequestFailed(msg));
    })
  }
};

export function resetPasswordThunk(password, token) {
  return function(dispatch) {
    dispatch(resetingPasswordRequest());
    resetPasswordPost(password, token)
    .then(({ success }) => {
      if (success) {
        batch(() => {
          dispatch(resetingPasswordRequestSuccess());
        });
      } else {
        throw new Error({ httpCode: 500, message: 'Неизвестная ошибка сервера' });
      }  
    })
    .catch(({ httpCode, message }) => {
      const msg = httpCode ? message : 'Не удалось связаться с сервером';
      dispatch(resetingPasswordRequestFailed(msg));
    })
  }
};

export function logoutUserThunk(refresToken) {
  return function(dispatch) {
    dispatch(loginoutingRuquest());
    logoutUser(refresToken)
    .then(({ success }) => {
      if (success) {
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('accessToken');
        batch(() => {
          dispatch(loginoutingRuquestSuccess());
        });
      } else {
        throw new Error({ httpCode: 500, message: 'Неизвестная ошибка сервера' });
      }  
    })
    .catch(({ httpCode, message }) => {
      const msg = httpCode ? message : 'Не удалось связаться с сервером';
      dispatch(loginoutingRuquestFailed(msg));
    })
  }
};

// export function RefreshTokenThunk(refresToken) {
//   return function(dispatch) {
//     dispatch(refreshTokerRequest());
//     refreshTokenPost(refresToken)
//     .then(({ success, refreshToken, accessToken }) => {
//       if (success) {
//         localStorage.setItem('refreshToken', refreshToken)
//         localStorage.setItem('accessToken', accessToken)
//         batch(() => {
//           dispatch(refreshTokerRequestSucces(accessToken, refresToken));
//         });
//       } else {
//         throw new Error({ httpCode: 500, message: 'Неизвестная ошибка сервера' });
//       }  
//     })
//     .catch(({ httpCode, message }) => {
//       const msg = httpCode ? message : 'Не удалось связаться с сервером';
//       dispatch(refreshTokerRequestFailed(msg));
//     })
//   }
// };

export function getUserDataThunk(token) {
  return function(dispatch) {
    dispatch(getUserDataRequest());
    getUserData(token)
    .then(({ success, user }) => {
      if (success) {
        batch(() => {
          dispatch(getUserDataRequestSuccess(user));
        });
      } else {
        throw new Error({ httpCode: 500, message: 'Неизвестная ошибка сервера' });
      }  
    })
    .catch(({ httpCode, message }) => {
      const msg = httpCode ? message : 'Не удалось связаться с сервером';
      dispatch(getUserDataRequestFailed(msg));
    })
  }
};

export function updateUserDataThunk(name, email, password, token) {
  return function(dispatch) {
    dispatch(updateUserDataRequest());
    patchUserData(name, email, password, token)
    .then(({ success, user }) => {
      if (success) {
        batch(() => {
          dispatch(updateUserDataRequestSuccess(user));
        });
      } else {
        throw new Error({ httpCode: 500, message: 'Неизвестная ошибка сервера' });
      }  
    })
    .catch(({ httpCode, message }) => {
      const msg = httpCode ? message : 'Не удалось связаться с сервером';
      dispatch(updateUserDataRequestFailed(msg));
    })
  }
};

export const checkUserAuth = () => {
  return (dispatch) => {
    if (localStorage.getItem("accessToken")) {
      dispatch(getUserDataThunk(localStorage.getItem("accessToken")))
        .catch((error) => {
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
