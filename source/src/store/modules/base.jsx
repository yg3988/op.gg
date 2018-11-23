import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';

//  action types
const SHOW_MODAL = '/SHOW_MODAL';
const HIDE_MODAL = '/HIDE_MODAL';

//  action creators
export const showModal = createAction(SHOW_MODAL);
export const hideModal = createAction(HIDE_MODAL);

//  initial state
const initialState = Map({
  modal: Map({
    signup: false,
    login: false,
  }),
});

//  reducer
export default handleActions(
  {
    [SHOW_MODAL]: (state, action) => {
      const { payload: modalName } = action;
      console.log(state);
      return state.setIn(['modal', modalName], true);
    },
    [HIDE_MODAL]: (state, action) => {
      const { payload: modalName } = action;
      return state.setIn(['modal', modalName], false);
    },
  },
  initialState,
);
