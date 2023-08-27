import { forgotingPasswordRequest, forgotingPasswordRequestFailed, forgotingPasswordRequestSuccess, getUserDataRequest, getUserDataRequestFailed, getUserDataRequestSuccess, loginingFailed, loginingRuquested, loginingSuccess, loginoutingRuquest, loginoutingRuquestFailed, loginoutingRuquestSuccess, refreshTokerRequest, refreshTokerRequestFailed, refreshTokerRequestSucces, registrationRequest, registrationRequestFailed, registrationRequestSeccessed, resetingPasswordRequest, resetingPasswordRequestFailed, resetingPasswordRequestSuccess, setAuthorizationState, setForgottenPassword, setUserData, updateUserDataRequest, updateUserDataRequestFailed, updateUserDataRequestSuccess } from '../actions/user-api-action-creators';
import {initialState, userApiReducer} from './user-api-reducer'

describe('TEST USER API REDUCER', () =>  {

  it('Test should return default initial state', () => {
    // @ts-ignore
    expect(userApiReducer(undefined, {})).toEqual(initialState)
  });

  it('Test should handle "loginingRuquested" action', () => {
    expect(userApiReducer(initialState, loginingRuquested())).toEqual({
      ...initialState,
      loginingRequest: true,
      loginingRequestSuccess: false,
      loginingRequestFailed: false,
      error: null,
    });
  });

  it('Test should handle "loginingSuccess" action', () => {
    const payloadLoginingSuccess = {
      accessToken: "some accessToken",
      refreshToken:"some refreshToken",
      user: {
        name: 'Jack Maxwell',
        email: 'orion255@anotherfakeemailserver.net',
      },
    };

    expect(userApiReducer(initialState, loginingSuccess(payloadLoginingSuccess))).toEqual({
      ...initialState,
      userData: payloadLoginingSuccess.user,
      accessToken: payloadLoginingSuccess.accessToken,
      refreshToken: payloadLoginingSuccess.refreshToken,
      loginingRequest: false,
      loginingRequestSuccess: true,
      loginingRequestFailed: false,
      isUserAuth: true,
      error: null,
    });
  });

  it('Test should handle "loginingRuquested" action', () => {
    expect(userApiReducer(initialState, loginingFailed('some error'))).toEqual({
      ...initialState,
      loginingRequest: false,
      loginingRequestSuccess: false,
      loginingRequestFailed: true,
      error:'some error',
    });
  });

  it('Test should handle "loginoutingRuquest" action', () => {
    expect(userApiReducer(initialState, loginoutingRuquest())).toEqual({
      ...initialState,
      loginoutingRequest: true,
      loginoutingRequestSuccess: false,
      loginoutingRequestFailed: false,
    });
  });

  it('Test should handle "loginoutingRuquestSuccess" action', () => {
    expect(userApiReducer(initialState, loginoutingRuquestSuccess())).toEqual({
      ...initialState,
      loginoutingRequest: false,
      loginoutingRequestSuccess: true,
      loginoutingRequestFailed: false,
      userData: null,
      isUserAuth: false,
      refreshToken: null,
      accessToken: null,
    });
  });

  it('Test should handle "loginoutingRuquestFailed" action', () => {
    expect(userApiReducer(initialState, loginoutingRuquestFailed('some error'))).toEqual({
      ...initialState,
      loginoutingRequest: false,
      loginoutingRequestSuccess: false,
      loginoutingRequestFailed: true,
      error:'some error',
    });
  });

  it('Test should handle "registrationRequest" action', () => {
    expect(userApiReducer(initialState, registrationRequest())).toEqual({
      ...initialState,
      registrationRequest: true,
      registrationRequestSuccess: false,
      registrationRequestFailed: false,
      error: null,
    });
  });

  it('Test should handle "registrationRequestSeccessed" action', () => {
    expect(userApiReducer(initialState, registrationRequestSeccessed('some accessToken', 'somerefreshToken'))).toEqual({
      ...initialState,
      registrationRequest: false,
      registrationRequestSuccess: true,
      registrationRequestFailed: false,
      accessToken: 'some accessToken',
      refreshToken: 'somerefreshToken',
    });
  });

  it('Test should handle "registrationRequestFailed" action', () => {
    expect(userApiReducer(initialState, registrationRequestFailed('some error'))).toEqual({
      ...initialState,
      registrationRequest: false,
      registrationRequestSuccess: false,
      registrationRequestFailed: true,
      error: 'some error',
    });
  });

  it('Test should handle "forgotingPasswordRequest" action', () => {
    expect(userApiReducer(initialState, forgotingPasswordRequest())).toEqual({
      ...initialState,
      forgotPasswordRequest: true,
      forgotPasswordRequestSuccess: false,
      forgotPasswordRequestFailed: false,
      error: null,
    });
  });

  it('Test should handle "forgotingPasswordRequestSuccess" action', () => {
    expect(userApiReducer(initialState, forgotingPasswordRequestSuccess())).toEqual({
      ...initialState,
      forgotPasswordRequest: false,
      forgotPasswordRequestSuccess: true,
      forgotPasswordRequestFailed: false,
      error: null,
    });
  });

  it('Test should handle "forgotingPasswordRequestFailed" action', () => {
    expect(userApiReducer(initialState, forgotingPasswordRequestFailed('some error'))).toEqual({
      ...initialState,
      forgotPasswordRequest: false,
      forgotPasswordRequestSuccess: false,
      forgotPasswordRequestFailed: true,
      error: 'some error',
    });
  });

  it('Test should handle "resetingPasswordRequest" action', () => {
    expect(userApiReducer(initialState, resetingPasswordRequest())).toEqual({
      ...initialState,
      resetPasswordRequest: true,
      resetPasswordRequestSuccess: false,
      resetPasswordRequestFailed: false,
      error: null,
    });
  });

  it('Test should handle "resetingPasswordRequestSuccess" action', () => {
    expect(userApiReducer(initialState, resetingPasswordRequestSuccess())).toEqual({
      ...initialState,
      resetPasswordRequest: false,
      resetPasswordRequestSuccess: true,
      resetPasswordRequestFailed: false,
      error: null,
    });
  });

  it('Test should handle "resetingPasswordRequestFailed" action', () => {
    expect(userApiReducer(initialState, resetingPasswordRequestFailed('some error'))).toEqual({
      ...initialState,
      resetPasswordRequest: false,
      resetPasswordRequestSuccess: false,
      resetPasswordRequestFailed: true,
      error: 'some error',
    });
  });

  it('Test should handle "refreshTokerRequest" action', () => {
    expect(userApiReducer(initialState, refreshTokerRequest())).toEqual({
      ...initialState,
      refreshTokenRequest: true,
      refreshTokenRequestSuccess: false,
      refreshTokenRequestFailed: false,
      error: null,
    });
  });

  it('Test should handle "refreshTokerRequestSucces" action', () => {
    expect(userApiReducer(initialState, refreshTokerRequestSucces('some accessToken', 'somerefreshToken'))).toEqual({
      ...initialState,
      refreshTokenRequest: false,
      refreshTokenRequestSuccess: true,
      refreshTokenRequestFailed: false,
      accessToken: 'some accessToken',
      refreshToken: 'somerefreshToken',
    });
  });

  it('Test should handle "refreshTokerRequestFailed" action', () => {
    expect(userApiReducer(initialState, refreshTokerRequestFailed('some error'))).toEqual({
      ...initialState,
      refreshTokenRequest: false,
      refreshTokenRequestSuccess: false,
      refreshTokenRequestFailed: true,
      error: 'some error',
    });
  });

  it('Test should handle "getUserDataRequest" action', () => {
    expect(userApiReducer(initialState, getUserDataRequest())).toEqual({
      ...initialState,
      getUserDataRequest: true,
      getUserDataRequestSuccess: false,
      getUserDataRequestFailed: false,
      error: null,
    });
  });

  it('Test should handle "getUserDataRequestSuccess" action', () => {
    const payloadGetUserDataRequestSuccess = {
      email: 'foto@mail.ru',
      name: '1234567890'
    };

    expect(userApiReducer(initialState, getUserDataRequestSuccess(payloadGetUserDataRequestSuccess))).toEqual({
      ...initialState,
      getUserDataRequest: false,
      getUserDataRequestSuccess: true,
      getUserDataRequestFailed: false,
      error: null,
      userData: payloadGetUserDataRequestSuccess,
    });
  });

  it('Test should handle "getUserDataRequestFailed" action', () => {
    expect(userApiReducer(initialState, getUserDataRequestFailed('some error'))).toEqual({
      ...initialState,
      getUserDataRequest: false,
      getUserDataRequestSuccess: false,
      getUserDataRequestFailed: true,
      error: 'some error',
    });
  });

  it('Test should handle "updateUserDataRequest" action', () => {
    expect(userApiReducer(initialState, updateUserDataRequest())).toEqual({
      ...initialState,
      updateUserDataRequest: true,
      updateUserDataRequestSuccess: false,
      updateUserDataRequestFailed: false,
      error: null,
    });
  });

  it('Test should handle "updateUserDataRequestSuccess" action', () => {
    const payloadUpdateUserDataRequestSuccess = {
      email: 'foto@mail.ru',
      name: '1234567890'
    };

    expect(userApiReducer(initialState, updateUserDataRequestSuccess(payloadUpdateUserDataRequestSuccess))).toEqual({
      ...initialState,
      updateUserDataRequest: false,
      updateUserDataRequestSuccess: true,
      updateUserDataRequestFailed: false,
      userData: payloadUpdateUserDataRequestSuccess,
    });
  });

  it('Test should handle "updateUserDataRequestFailed" action', () => {
    expect(userApiReducer(initialState, updateUserDataRequestFailed('some error'))).toEqual({
      ...initialState,
      updateUserDataRequest: false,
      updateUserDataRequestSuccess: false,
      updateUserDataRequestFailed: true,
      error: 'some error',
    });
  });

  it('Test should handle "setForgottenPassword" action', () => {
    expect(userApiReducer(initialState, setForgottenPassword(true))).toEqual({
      ...initialState,
      passwordForgotten: true,
    });
  });

  it('Test should handle "setAuthorizationState" action', () => {
    expect(userApiReducer(initialState, setAuthorizationState(true))).toEqual({
      ...initialState,
      isUserAuth: true,
    });
  });

  it('Test should handle "setUserData" action', () => {
    const payloadSetUserData = {
      email: 'foto@mail.ru',
      name: '1234567890'
    };

    expect(userApiReducer(initialState, setUserData(payloadSetUserData))).toEqual({
      ...initialState,
      userData: payloadSetUserData,
    });

    expect(userApiReducer(initialState, setUserData(null))).toEqual({
      ...initialState,
      userData: null,
    });

  });
});