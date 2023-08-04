import { batch } from 'react-redux';
import { loginingRuquested, loginingSuccess, loginingFailed, registrationRequest, registrationRequestSeccessed, registrationRequestFailed, forgotingPasswordRequest, forgotingPasswordRequestSuccess, forgotingPasswordRequestFailed, resetingPasswordRequest, resetingPasswordRequestSuccess, resetingPasswordRequestFailed } from '../actions/user-api-action-creators';
import { forgotPasswordPost, loginUser, registerUser, resetPasswordPost } from '../../utils/api/api';
import { setCookie } from '../../utils/cookie';

// TODO
// Добавить в тело функции сохранение куков у клиента из запроса

export function loginUserThunk(email, password) {
  return function(dispatch) {
    dispatch(loginingRuquested());
    loginUser(email, password)
    .then(({ success, user, accessToken, refreshToken}) => {
      if (success) {
        batch(() => {
          dispatch(loginingSuccess({user: user, accessToken: accessToken, refreshToken: refreshToken }));
          setCookie('refreshToken', refreshToken);
          setCookie('accessToken', accessToken);
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
