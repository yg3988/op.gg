const INITIALIZE_INPUT = 'auth/INITIALZIE_INPUT';
const CHANGE_INPUT = 'auth/CHANGE_INPUT';

const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';

const INITIALIZE_ERROR = 'auth/INITIALIZE_ERROR';

export const initializeInput = () => ({
  type: INITIALIZE_INPUT,
});

export const changeInput = ({ name, value }) => ({
  type: CHANGE_INPUT,
  payload: {
    name,
    value,
  },
});

export const login = () => ({
  type: LOGIN,
});

export const loginSuccess = ({ user, token }) => ({
  type: LOGIN_SUCCESS,
  payload: {
    user,
    token,
  },
});

export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  payload: {
    error,
  },
});

export const initailizeError = () => ({
  type: INITIALIZE_ERROR,
});

const initialState = {
  form: {
    username: '',
    password: '',
  },
  logged: false,
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_INPUT:
      return {
        ...state,
        form: {
          username: '',
          password: '',
        },
      };
    case CHANGE_INPUT: {
      let newForm = state.form;
      newForm[action.payload.name] = action.patload.value;
      return {
        ...state,
        form: newForm,
      };
    }

    default:
      return state;
  }
};
