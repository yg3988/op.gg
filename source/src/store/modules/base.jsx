import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';
//  action types
const SHOW_MODAL = 'base/SHOW_MODAL';
const HIDE_MODAL = 'base/HIDE_MODAL';

const LOGIN = 'base/LOGIN';
const LOGOUT = 'base/LOGOUT';
const CHECK_LOGIN = 'base/CHECK_LOGIN';
const CHANGE_USERNAME_INPUT = 'base/CHANGE_USERNAME_INPUT';
const CHANGE_PASSWORD_INPUT = 'base/CHANGE_PASSWORD_INPUT';
const INITIALIZE_LOGIN = 'base/INITIALIZE_LOGIN';

//  action creators
export const showModal = createAction(SHOW_MODAL);
export const hideModal = createAction(HIDE_MODAL);
export const login = createAction(LOGIN);
export const logout = createAction(LOGOUT);
export const checkLogin = createAction(CHECK_LOGIN);
export const changeUsernameInput = createAction(CHANGE_USERNAME_INPUT);
export const changePasswordInput = createAction(CHANGE_PASSWORD_INPUT);
export const initializeLogin = createAction(INITIALIZE_LOGIN);

//  initial state
const initialState = Map({
  modal: Map({
    signup: false,
  }),
  userInfo: Map({
    username: '',
    password: '',
    error: false,
  }),
  logged: false,
});

//  reducer
export default handleActions(
  {
    [SHOW_MODAL]: (state, action) => {
      const { payload: modalName } = action;
      return state.setIn(['modal', modalName], true);
    },
    [HIDE_MODAL]: (state, action) => {
      const { payload: modalName } = action;
      return state.setIn(['modal', modalName], false);
    },
    ...pender({
      type: LOGIN,
      onSuccess: (state, action) => {
        return state.set('logged', true);
      },
      onError: (state, action) => {
        return state
          .setIn(['userInfo', 'username'], '')
          .setIn(['userInfo', 'password'], '')
          .setIn(['userInfo', 'error'], true);
      },
    }),
    ...pender({
      type: CHECK_LOGIN,
      onSuccess: (state, action) => {
        const { logged } = action.payload.data;
        return state.set('logged', logged);
      },
    }),
    [CHANGE_USERNAME_INPUT]: (state, action) => {
      const { payload: value } = action;
      return state.setIn(['userInfo', 'username'], value);
    },
    [CHANGE_PASSWORD_INPUT]: (state, action) => {
      const { paylaod: value } = action;
      return state.setIn(['userInfo', 'password'], value);
    },
    [INITIALIZE_LOGIN]: (state, action) => {
      return state.set('userInfo', initialState.get('userInfo'));
    },
  },
  initialState,
);
