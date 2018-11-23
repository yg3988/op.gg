const INITIALZIE_INPUT = '/INITIALZIE_INPUT';

const CHANGE_INPUT = '/CHANGE_INPUT';

export const initializeInput = () => ({
  type: INITIALZIE_INPUT,
});

export const changeInput = ({ name, value }) => ({
  type: CHANGE_INPUT,
  payload: {
    name,
    value,
  },
});

const initialState = {
  form: {
    ID: '',
    PASSWORD: '',
  },
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case INITIALZIE_INPUT:
      return {
        ...state,
        form: {
          ID: '',
          PASSWORD: '',
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
