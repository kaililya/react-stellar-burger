import { LOGIN_REQUEST,
   LOGIN_REQUEST_SUCCESS,
   LOGIN_REQUEST_FAILED,
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
   REFRESH_TOKEN_REQUEST_SUCCESS,
   REFRESH_TOKEN_REQUEST_FAILED,
   GET_USER_DATA_REQUEST,
   GET_USER_DATA_REQUEST_FAILED,
   GET_USER_DATA_REQUEST_SUCCESS,
   UPDATE_USER_DATA_REQUEST,
   UPDATE_USER_DATA_REQUEST_FAILED,
   UPDATE_USER_DATA_REQUEST_SUCCESS,
   AUTHORIZATION_STATE,
   SET_USER_DATA
    } from "./actions";


export const loginingRuquested = () => ({ type: LOGIN_REQUEST });
export const loginingSuccess = (userData) => ({ type: LOGIN_REQUEST_SUCCESS, payload: userData });
export const loginingFailed = (error) => ({ type: LOGIN_REQUEST_FAILED, payload: error });

export const loginoutingRuquest = () => ({ type: LOGOUT_REQUEST });
export const loginoutingRuquestSuccess = () => ({ type: LOGOUT_REQUEST_SUCCESS });
export const loginoutingRuquestFailed = (error) => ({ type: LOGOUT_REQUEST_FAILED, payload: error });

export const registrationRequest = () => ({ type: REGISTER_REQUEST });
export const registrationRequestSeccessed = (accessToken) => ({ type: REGISTER_REQUEST_SUCCESS, payload: accessToken });
export const registrationRequestFailed = (error) => ({ type: REGISTER_REQUEST_FAILED, payload: error });

export const forgotingPasswordRequest = () => ({ type: FORGOT_PASSWORD_REQUEST });
export const forgotingPasswordRequestSuccess = () => ({ type: FORGOT_PASSWORD_REQUEST_SUCCESS });
export const forgotingPasswordRequestFailed = (error) => ({ type: FORGOT_PASSWORD_REQUEST_FAILED, payload: error });

export const resetingPasswordRequest = () => ({ type: RESET_PASSWORD_REQUEST });
export const resetingPasswordRequestSuccess = () => ({ type: RESET_PASSWORD_REQUEST_SUCCESS });
export const resetingPasswordRequestFailed = (error) => ({ type: RESET_PASSWORD_REQUEST_FAILED, payload: error });

export const refreshTokerRequest = () => ({ type: REFRESH_TOKEN_REQUEST });
export const refreshTokerRequestSucces = (accessToken, refreshToken) => ({ type: REFRESH_TOKEN_REQUEST_SUCCESS, payload: {accessToken: accessToken, refreshToken: refreshToken} });
export const refreshTokerRequestFailed = (error) => ({ type: REFRESH_TOKEN_REQUEST_FAILED, payload: error });

export const getUserDataRequest = () => ({ type: GET_USER_DATA_REQUEST });
export const getUserDataRequestSuccess = (userData) => ({ type: GET_USER_DATA_REQUEST_SUCCESS, payload: userData });
export const getUserDataRequestFailed = (error) => ({ type: GET_USER_DATA_REQUEST_FAILED, payload: error });

export const updateUserDataRequest = () => ({ type: UPDATE_USER_DATA_REQUEST });
export const updateUserDataRequestSuccess = (userData) => ({ type: UPDATE_USER_DATA_REQUEST_SUCCESS, payload: userData });
export const updateUserDataRequestFailed = (error) => ({ type: UPDATE_USER_DATA_REQUEST_FAILED, payload: error });

export const setForgottenPassword = (state) => ({ type: SET_FORGOTTEN_PASSWORD, payload: state });

export const setAuthorizationState = (state) => ({ type: AUTHORIZATION_STATE, payload: state });

export const setUserData = (userData) => ({ type: SET_USER_DATA, payload: userData });




