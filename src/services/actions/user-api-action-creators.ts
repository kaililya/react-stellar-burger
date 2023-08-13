import { string } from "prop-types";
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

import { TUserData } from "../../utils/types";


type TLoginingRuquested = {
  readonly type: typeof LOGIN_REQUEST;
};

type TLoginingSuccess<T> = {
  readonly type: typeof LOGIN_REQUEST_SUCCESS;
  readonly payload: {user: T, accessToken:string, refreshToken:string};
};

type TLoginingFailed = {
  readonly type: typeof LOGIN_REQUEST_FAILED;
  readonly payload: string;
};

export const loginingRuquested = ():TLoginingRuquested => ({ type: LOGIN_REQUEST });
export const loginingSuccess = (userData:{user: TUserData, accessToken:string, refreshToken:string }):TLoginingSuccess<TUserData> => ({ type: LOGIN_REQUEST_SUCCESS, payload: userData });
export const loginingFailed = (error:string):TLoginingFailed => ({ type: LOGIN_REQUEST_FAILED, payload: error });

type TLoginoutingRuquest = {
  readonly type: typeof LOGOUT_REQUEST;
};

type TLoginoutingRuquestSuccess = {
  readonly type: typeof LOGOUT_REQUEST_SUCCESS;
};

type TLoginoutingRuquestFailed = {
  readonly type: typeof LOGOUT_REQUEST_FAILED;
  readonly payload: string;
};

export const loginoutingRuquest = ():TLoginoutingRuquest => ({ type: LOGOUT_REQUEST });
export const loginoutingRuquestSuccess = ():TLoginoutingRuquestSuccess => ({ type: LOGOUT_REQUEST_SUCCESS });
export const loginoutingRuquestFailed = (error:string):TLoginoutingRuquestFailed => ({ type: LOGOUT_REQUEST_FAILED, payload: error });

type TRegistrationRequest = {
  readonly type: typeof REGISTER_REQUEST;
};

type TRregistrationRequestSeccessed = {
  readonly type: typeof REGISTER_REQUEST_SUCCESS;
  readonly payload: {accessToken: string, refreshToken: string};
};

type TRegistrationRequestFailed = {
  readonly type: typeof REGISTER_REQUEST_FAILED;
  readonly payload: string;
};

export const registrationRequest = ():TRegistrationRequest => ({ type: REGISTER_REQUEST });
export const registrationRequestSeccessed = (accessToken:string, refreshToken:string):TRregistrationRequestSeccessed => ({ type: REGISTER_REQUEST_SUCCESS, payload: {accessToken: accessToken, refreshToken: refreshToken} });
export const registrationRequestFailed = (error:string):TRegistrationRequestFailed => ({ type: REGISTER_REQUEST_FAILED, payload: error });

type TForgotingPasswordRequest = {
  readonly type: typeof FORGOT_PASSWORD_REQUEST;
};

type TForgotingPasswordRequestSuccess = {
  readonly type: typeof FORGOT_PASSWORD_REQUEST_SUCCESS;
};

type TForgotingPasswordRequestFailed = {
  readonly type: typeof FORGOT_PASSWORD_REQUEST_FAILED;
  readonly payload: string;
};

export const forgotingPasswordRequest = ():TForgotingPasswordRequest => ({ type: FORGOT_PASSWORD_REQUEST });
export const forgotingPasswordRequestSuccess = ():TForgotingPasswordRequestSuccess => ({ type: FORGOT_PASSWORD_REQUEST_SUCCESS });
export const forgotingPasswordRequestFailed = (error:string) => ({ type: FORGOT_PASSWORD_REQUEST_FAILED, payload: error });

type TResetingPasswordRequest = {
  readonly type: typeof RESET_PASSWORD_REQUEST;
};

type TResetingPasswordRequestSuccess = {
  readonly type: typeof RESET_PASSWORD_REQUEST_SUCCESS;
};

type TResetingPasswordRequestFailed = {
  readonly type: typeof RESET_PASSWORD_REQUEST_FAILED;
  readonly payload: string;
};

export const resetingPasswordRequest = ():TResetingPasswordRequest => ({ type: RESET_PASSWORD_REQUEST });
export const resetingPasswordRequestSuccess = ():TResetingPasswordRequestSuccess => ({ type: RESET_PASSWORD_REQUEST_SUCCESS });
export const resetingPasswordRequestFailed = (error:string):TResetingPasswordRequestFailed => ({ type: RESET_PASSWORD_REQUEST_FAILED, payload: error });

type TRefreshTokerRequest = {
  readonly type: typeof REFRESH_TOKEN_REQUEST;
};

type TRefreshTokerRequestSucces = {
  readonly type: typeof REFRESH_TOKEN_REQUEST_SUCCESS;
  readonly payload: {accessToken: string, refreshToken: string};
};

type TRefreshTokerRequestFailed = {
  readonly type: typeof REFRESH_TOKEN_REQUEST_FAILED;
  readonly payload: string;
};

export const refreshTokerRequest = () => ({ type: REFRESH_TOKEN_REQUEST });
export const refreshTokerRequestSucces = (accessToken:string, refreshToken:string):TRefreshTokerRequestSucces => ({ type: REFRESH_TOKEN_REQUEST_SUCCESS, payload: {accessToken: accessToken, refreshToken: refreshToken} });
export const refreshTokerRequestFailed = (error:string):TRefreshTokerRequestFailed => ({ type: REFRESH_TOKEN_REQUEST_FAILED, payload: error });

type TGetUserDataRequest = {
  readonly type: typeof GET_USER_DATA_REQUEST;
};

type TGetUserDataRequestSuccess<T> = {
  readonly type: typeof GET_USER_DATA_REQUEST_SUCCESS;
  readonly payload: T;
};

type TGetUserDataRequestFailed = {
  readonly type: typeof GET_USER_DATA_REQUEST_FAILED;
  readonly payload: string;
};

export const getUserDataRequest = ():TGetUserDataRequest => ({ type: GET_USER_DATA_REQUEST });
export const getUserDataRequestSuccess = (userData:TUserData):TGetUserDataRequestSuccess<TUserData> => ({ type: GET_USER_DATA_REQUEST_SUCCESS, payload: userData });
export const getUserDataRequestFailed = (error:string):TGetUserDataRequestFailed => ({ type: GET_USER_DATA_REQUEST_FAILED, payload: error });

type TUpdateUserDataRequest= {
  readonly type: typeof UPDATE_USER_DATA_REQUEST;
};

type TUpdateUserDataRequestSuccess<T> = {
  readonly type: typeof UPDATE_USER_DATA_REQUEST_SUCCESS;
  readonly payload: T;
};

type TUpdateUserDataRequestFailed = {
  readonly type: typeof UPDATE_USER_DATA_REQUEST_FAILED;
  readonly payload: string;
};

export const updateUserDataRequest = ():TUpdateUserDataRequest => ({ type: UPDATE_USER_DATA_REQUEST });
export const updateUserDataRequestSuccess = (userData:TUserData):TUpdateUserDataRequestSuccess<TUserData> => ({ type: UPDATE_USER_DATA_REQUEST_SUCCESS, payload: userData });
export const updateUserDataRequestFailed = (error:string):TUpdateUserDataRequestFailed => ({ type: UPDATE_USER_DATA_REQUEST_FAILED, payload: error });

type TSetForgottenPassword = {
  readonly type: typeof SET_FORGOTTEN_PASSWORD;
  readonly payload: boolean;
};

export const setForgottenPassword = (state:boolean):TSetForgottenPassword => ({ type: SET_FORGOTTEN_PASSWORD, payload: state });

type TSetAuthorizationState = {
  readonly type: typeof AUTHORIZATION_STATE;
  readonly payload: boolean;
};

export const setAuthorizationState = (state:boolean):TSetAuthorizationState => ({ type: AUTHORIZATION_STATE, payload: state });

type TSetUserData<T> = {
  readonly type: typeof SET_USER_DATA;
  readonly payload: null|T;
};

export const setUserData = (userData:null|TUserData):TSetUserData<TUserData> => ({ type: SET_USER_DATA, payload: userData });




