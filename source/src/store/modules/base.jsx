import { createAction, handleAction } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';
import handleActions from 'redux-actions/lib/handleActions';

//  action types
const SHOW_MODAL = '/SHOW_MODAL';
const HIDE_MODAL = '/HIDE_MODAL';

//  action creators
export const showModal = createAction(SHOW_MODAL);
export const hideModal = createAction(HIDE_MODAL);

//  initial state
const initialState = Map({
  modal: Map({
    modal: true,
    login: false,
  }),
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
  },
  initialState,
);
