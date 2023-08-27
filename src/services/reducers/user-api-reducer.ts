import { TUserData } from "../../utils/types";
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
    LOGOUT_REQUEST,
    LOGOUT_REQUEST_SUCCESS,
    LOGOUT_REQUEST_FAILED,
    REFRESH_TOKEN_REQUEST,
    REFRESH_TOKEN_REQUEST_FAILED,
    REFRESH_TOKEN_REQUEST_SUCCESS,
    GET_USER_DATA_REQUEST,
    GET_USER_DATA_REQUEST_SUCCESS,
    GET_USER_DATA_REQUEST_FAILED,
    UPDATE_USER_DATA_REQUEST,
    UPDATE_USER_DATA_REQUEST_FAILED,
    UPDATE_USER_DATA_REQUEST_SUCCESS,
    AUTHORIZATION_STATE,
    SET_USER_DATA
   } from "../actions/actions";

import { TUserApiActions } from "../actions/user-api-action-creators";

type TInitialStateUser = {
  userData: null| TUserData;
  loginingRequest: boolean;
  loginingRequestSuccess: boolean;
  loginingRequestFailed: boolean;
  loginoutingRequest: boolean;
  loginoutingRequestSuccess: boolean;
  loginoutingRequestFailed: boolean;
  registrationRequest: boolean;
  registrationRequestSuccess: boolean;
  registrationRequestFailed: boolean;
  forgotPasswordRequest: boolean;
  forgotPasswordRequestSuccess: boolean;
  forgotPasswordRequestFailed: boolean;
  resetPasswordRequest: boolean;
  resetPasswordRequestSuccess: boolean;
  resetPasswordRequestFailed: boolean;
  refreshTokenRequest: boolean;
  refreshTokenRequestSuccess: boolean;
  refreshTokenRequestFailed: boolean;
  updateUserDataRequest: boolean;
  updateUserDataRequestSuccess: boolean;
  updateUserDataRequestFailed: boolean;
  getUserDataRequest: boolean;
  getUserDataRequestSuccess: boolean;
  getUserDataRequestFailed: boolean;
  refreshToken: null | string;
  accessToken: null | string;
  error: null | string;
  passwordForgotten: boolean;
  isUserAuth: boolean;
};

export const initialState:TInitialStateUser = {
  userData: null,
  loginingRequest: false,
  loginingRequestSuccess: false,
  loginingRequestFailed: false,
  loginoutingRequest: false,
  loginoutingRequestSuccess: false,
  loginoutingRequestFailed: false,
  registrationRequest: false,
  registrationRequestSuccess: false,
  registrationRequestFailed: false,
  forgotPasswordRequest: false,
  forgotPasswordRequestSuccess: false,
  forgotPasswordRequestFailed: false,
  resetPasswordRequest: false,
  resetPasswordRequestSuccess: false,
  resetPasswordRequestFailed: false,
  refreshTokenRequest: false,
  refreshTokenRequestSuccess: false,
  refreshTokenRequestFailed: false,
  updateUserDataRequest: false,
  updateUserDataRequestSuccess: false,
  updateUserDataRequestFailed: false,
  getUserDataRequest: false,
  getUserDataRequestSuccess: false,
  getUserDataRequestFailed: false,
  refreshToken: null,
  accessToken: null,
  error: null,
  passwordForgotten: false,
  isUserAuth: false,
};

export const userApiReducer = (state = initialState, action:TUserApiActions):TInitialStateUser => {
  switch (action.type) {

    case UPDATE_USER_DATA_REQUEST: {
      return {
        ...state,
        updateUserDataRequest: true,
        updateUserDataRequestSuccess: false,
        updateUserDataRequestFailed: false,
        error: null,
      }
    };

    case UPDATE_USER_DATA_REQUEST_SUCCESS: {
      return {
        ...state,
        updateUserDataRequest: false,
        updateUserDataRequestSuccess: true,
        updateUserDataRequestFailed: false,
        userData: action.payload,
      }
    };

    case UPDATE_USER_DATA_REQUEST_FAILED: {
      return {
        ...state,
        updateUserDataRequest: false,
        updateUserDataRequestSuccess: false,
        updateUserDataRequestFailed: true,
        error: action.payload,
      }
    };

    case GET_USER_DATA_REQUEST: {
      return {
        ...state,
        getUserDataRequest: true,
        getUserDataRequestSuccess: false,
        getUserDataRequestFailed: false,
        error: null,
      }
    };

    case GET_USER_DATA_REQUEST_SUCCESS: {
      return {
        ...state,
        getUserDataRequest: false,
        getUserDataRequestSuccess: true,
        getUserDataRequestFailed: false,
        error: null,
        userData: action.payload,
      }
    };

    case GET_USER_DATA_REQUEST_FAILED: {
      return {
        ...state,
        getUserDataRequest: false,
        getUserDataRequestSuccess: false,
        getUserDataRequestFailed: true,
        error: action.payload,
      }
    };

    case REFRESH_TOKEN_REQUEST: {
      return {
        ...state,
        refreshTokenRequest: true,
        refreshTokenRequestSuccess: false,
        refreshTokenRequestFailed: false,
        error: null,
      }
    };

    case REFRESH_TOKEN_REQUEST_SUCCESS: {
      return {
        ...state,
        refreshTokenRequest: false,
        refreshTokenRequestSuccess: true,
        refreshTokenRequestFailed: false,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      }
    };

    case REFRESH_TOKEN_REQUEST_FAILED: {
      return {
        ...state,
        refreshTokenRequest: false,
        refreshTokenRequestSuccess: false,
        refreshTokenRequestFailed: true,
        error: action.payload,
      }
    };

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

    case LOGOUT_REQUEST: {
      return {
        ...state,
        loginoutingRequest: true,
        loginoutingRequestSuccess: false,
        loginoutingRequestFailed: false,
      }
    };

    case LOGOUT_REQUEST_SUCCESS: {
      return {
        ...state,
        loginoutingRequest: false,
        loginoutingRequestSuccess: true,
        loginoutingRequestFailed: false,
        userData: null,
        isUserAuth: false,
        refreshToken: null,
        accessToken: null,
      }
    };

    case LOGOUT_REQUEST_FAILED: {
      return {
        ...state,
        loginoutingRequest: false,
        loginoutingRequestSuccess: false,
        loginoutingRequestFailed: true,
        error: action.payload,
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
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
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
        error: action.payload,
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

    case AUTHORIZATION_STATE: {
      return {
        ...state,
        isUserAuth: action.payload,
      }
    };

    case SET_USER_DATA: {
      return {
        ...state,
        userData: action.payload,
      }
    };
      
    default:
      return state;
  }
};