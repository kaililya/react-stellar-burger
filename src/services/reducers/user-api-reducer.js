import { LOGIN_REQUEST,
    LOGIN_REQUEST_FAILED,
    LOGIN_REQUEST_SUCCESS,
    REGISTER_REQUEST,
    REGISTER_REQUEST_SUCCESS,
    REGISTER_REQUEST_FAILED,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_REQUEST_SUCCESS,
    FORGOT_PASSWORD_REQUEST_FAILED,
    SET_FORGOTTEN_PASSWORD,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_REQUEST_SUCCESS,
    RESET_PASSWORD_REQUEST_FAILED,
   } from "../actions/actions";

const initialState = {
  userData: null,
  loginingRequest: false,
  loginingRequestSuccess: false,
  loginingRequestFailed: false,
  registrationRequest: false,
  registrationRequestSuccess: false,
  registrationRequestFailed: false,
  forgotPasswordRequest: false,
  forgotPasswordRequestSuccess: false,
  forgotPasswordRequestFailed: false,
  resetPasswordRequest: false,
  resetPasswordRequestSuccess: false,
  resetPasswordRequestFailed: false,
  refreshToken: null,
  accessToken: null,
  error: null,
  passwordForgotten: false,
  isUserAuth: false,
};

export const userApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        loginingRequest: true,
        loginingRequestSuccess: false,
        loginingRequestFailed: false,
        error: null,
      }
    };

    case LOGIN_REQUEST_FAILED: {
      return {
        ...state,
        loginingRequest: false,
        loginingRequestSuccess: false,
        loginingRequestFailed: true,
        error: action.payload,
      }
    };

    case LOGIN_REQUEST_SUCCESS: {
      return {
        ...state,
        userData: action.payload.user,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        loginingRequest: false,
        loginingRequestSuccess: true,
        loginingRequestFailed: false,
        isUserAuth: true,
        error: null,
      }
    };

    case REGISTER_REQUEST: {
      return {
        ...state,
        registrationRequest: true,
        registrationRequestSuccess: false,
        registrationRequestFailed: false,
        error: null,
      }
    };

    case REGISTER_REQUEST_FAILED: {
      return {
        ...state,
        registrationRequest: false,
        registrationRequestSuccess: false,
        registrationRequestFailed: true,
        error: action.payload,
      }
    };

    case REGISTER_REQUEST_SUCCESS: {
      return {
        ...state,
        registrationRequest: false,
        registrationRequestSuccess: true,
        registrationRequestFailed: false,
        accessToken: action.payload,
      }
    };

    case FORGOT_PASSWORD_REQUEST: {
      return {
        ...state,
        forgotPasswordRequest: true,
        forgotPasswordRequestSuccess: false,
        forgotPasswordRequestFailed: false,
        error: null,
      }
    };

    case FORGOT_PASSWORD_REQUEST_SUCCESS: {
      return {
        ...state,
        forgotPasswordRequest: false,
        forgotPasswordRequestSuccess: true,
        forgotPasswordRequestFailed: false,
        error: null,
      }
    };

    case FORGOT_PASSWORD_REQUEST_FAILED: {
      return {
        ...state,
        forgotPasswordRequest: false,
        forgotPasswordRequestSuccess: false,
        forgotPasswordRequestFailed: true,
        error: null,
      }
    };

    case SET_FORGOTTEN_PASSWORD: {
      return {
        ...state, 
        passwordForgotten: true,
      }
    };

    case RESET_PASSWORD_REQUEST: {
      return {
        ...state,
        resetPasswordRequest: true,
        resetPasswordRequestSuccess: false,
        resetPasswordRequestFailed: false,
        error: null,
      }
    };

    case RESET_PASSWORD_REQUEST_SUCCESS: {
      return {
        ...state,
        resetPasswordRequest: false,
        resetPasswordRequestSuccess: true,
        resetPasswordRequestFailed: false,
        error: null,
      }
    };

    case RESET_PASSWORD_REQUEST_FAILED: {
      return {
        ...state,
        resetPasswordRequest: false,
        resetPasswordRequestSuccess: false,
        resetPasswordRequestFailed: true,
        error: action.payload,
      }
    };
      
    default:
      return state;
  }
};