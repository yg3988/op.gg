import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';
import * as AuthAPI from 'lib/api/auth';

//  action types
//    DEFAULT
const SET_ERROR = 'auth/SET_ERROR';

//    MODAL
const SHOW_MODAL = 'base/SHOW_MODAL';
const HIDE_MODAL = 'base/HIDE_MODAL';

//    LOGIN
const LOGIN = 'base/LOGIN';
const LOGOUT = 'base/LOGOUT';
const CHECK_LOGIN = 'base/CHECK_LOGIN';
const CHANGE_USERNAME_INPUT = 'base/CHANGE_USERNAME_INPUT';
const CHANGE_PASSWORD_INPUT = 'base/CHANGE_PASSWORD_INPUT';
const INITIALIZE_LOGIN = 'base/INITIALIZE_LOGIN';

//    REGISTER
const REGISTER = 'base/REGISTER';
const CHECK_USERNAME_EXIST = 'base/CHECK_USERNAME_EXIST';
const REGISTER_SUCCESS = 'base/REGISTER_SUCCESS';
const REGISTER_FAILURE = 'base/REGISTER_FAILURE';
//  action creators
export const setError = createAction(SET_ERROR); //  오류검출
export const showModal = createAction(SHOW_MODAL); //  모달생성
export const hideModal = createAction(HIDE_MODAL); //  모달숨김
export const register = createAction(REGISTER, AuthAPI.pageRegister); //  회원가입
export const checkUsernameExist = createAction(CHECK_USERNAME_EXIST); //  중복확인
export const registerSuccess = createAction(REGISTER_SUCCESS); //  가입성공
export const registerFailure = createAction(REGISTER_FAILURE); //  가입실패
export const login = createAction(LOGIN, AuthAPI.pageLogin); //  로그인시도
export const logout = createAction(LOGOUT, AuthAPI.pageLogout); //  로그아웃시도
export const checkLogin = createAction(CHECK_LOGIN, AuthAPI.checkLogged); //  로그인상태확인
export const changeUsernameInput = createAction(CHANGE_USERNAME_INPUT); //  username입력
export const changePasswordInput = createAction(CHANGE_PASSWORD_INPUT); //  password입력
export const initializeLogin = createAction(INITIALIZE_LOGIN); //  로그인초기화

//  initial state
const initialState = Map({
  modal: Map({
    signup: false,
  }),
  register: Map({
    form: Map({
      username: '',
      password: '',
    }),
    exist: false,
    error: 'null',
  }),
  login: Map({
    form: Map({
      username: '',
      password: '',
    }),
    logged: false,
    error: false,
  }),
  result: Map({}),
});

//  reducer
export default handleActions(
  {
    //  회원가입 창
    [SHOW_MODAL]: (state, action) => {
      const { payload: modalName } = action;
      return state.setIn(['modal', modalName], true);
    },
    [HIDE_MODAL]: (state, action) => {
      const { payload: modalName } = action;
      return state.setIn(['modal', modalName], false);
    },
    //  회원가입시 username 중복 검사
    ...pender({
      type: CHECK_USERNAME_EXIST,
      onSuccess: (state, action) =>
        state.setIn(['register', 'form', 'exist'], action.payload.data.exist),
    }),
    [SET_ERROR]: (state, action) => {
      const { message } = action.payload;
      return state.setIn(['register', 'error'], message);
    },
    // 회원가입 결과
    ...pender({
      type: REGISTER,
      onSuccess: (state, action) =>
        state.set('reslut', Map(action.payload.data)),
    }),
    //  로그인 성공, 실패 검사
    ...pender({
      type: LOGIN,
      onSuccess: (state, action) => {
        return state.setIn(['login', 'logged'], true);
      },
      onError: (state, action) => {
        return state
          .setIn(['login', 'form', 'username'], '')
          .setIn(['login', 'form', 'password'], '')
          .setIn(['login', 'form', 'error'], true);
      },
    }),
    //  로그인 상태 검사
    ...pender({
      type: CHECK_LOGIN,
      onSuccess: (state, action) => {
        const { logged } = action.payload.data;
        return state.setIn(['login', 'logged'], logged);
      },
    }),
    //  username 및 password 입력
    [CHANGE_USERNAME_INPUT]: (state, action) => {
      const { form, id, value } = action.payload;
      return state.setIn([form, 'form', id], value);
    },
    [CHANGE_PASSWORD_INPUT]: (state, action) => {
      const { form, id, value } = action.payload;
      return state.setIn([form, 'form', id], value);
    },
  },
  initialState,
);
