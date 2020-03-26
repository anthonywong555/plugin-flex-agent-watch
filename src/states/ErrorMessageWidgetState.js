const ACTION_DISMISS_BAR = 'DISMISS_BAR';
const ACTION_SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';

const initialState = {
  error: {
    isError: false,
    message: null
  },
  modal: {
    isOpen: false,
    hadClicked: false
  }
};

export class Actions {
  static dismissBar = () => ({ type: ACTION_DISMISS_BAR });
  static setErrorMessage = message => ({ type: ACTION_SET_ERROR_MESSAGE, message });
}

export function reduce(state = initialState, action) {
  switch (action.type) {
    case ACTION_DISMISS_BAR: {
      return {
        ...state,
        modal: {
          isOpen: false,
          hadClicked: true
        }
      };
    }

    case ACTION_SET_ERROR_MESSAGE:
      if(state.modal.hadClicked) {
        return {
          ...state
        }
      } else {
        return {
          ...state,
          modal: {
            isOpen: true,
          },
          error: {
            isError: true,
            message: action.message
          }
        }
      }

    default:
      return state;
  }
}
