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
    } from "./actions";


export const loginingRuquested = () => ({ type: LOGIN_REQUEST });
export const loginingSuccess = (userData) => ({ type: LOGIN_REQUEST_SUCCESS, payload: userData });
export const loginingFailed = (error) => ({ type: LOGIN_REQUEST_FAILED, payload: error });

export const registrationRequest = () => ({ type: REGISTER_REQUEST });
export const registrationRequestSeccessed = (accessToken) => ({ type: REGISTER_REQUEST_SUCCESS, payload: accessToken });
export const registrationRequestFailed = (error) => ({ type: REGISTER_REQUEST_FAILED, payload: error });

export const forgotingPasswordRequest = () => ({ type: FORGOT_PASSWORD_REQUEST });
export const forgotingPasswordRequestSuccess = () => ({ type: FORGOT_PASSWORD_REQUEST_SUCCESS });
export const forgotingPasswordRequestFailed = (error) => ({ type: FORGOT_PASSWORD_REQUEST_FAILED, payload: error });

export const setForgottenPassword = (state) => ({ type: SET_FORGOTTEN_PASSWORD, payload: state });

export const resetingPasswordRequest = () => ({ type: RESET_PASSWORD_REQUEST });
export const resetingPasswordRequestSuccess = () => ({ type: RESET_PASSWORD_REQUEST_SUCCESS });
export const resetingPasswordRequestFailed = (error) => ({ type: RESET_PASSWORD_REQUEST_FAILED, payload: error });





