import { SHOW_MENU, SHOW_MAIN } from '../actions/index';

const INITIAL_STATE = { mainPage: true, menuPage: false };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {

    // show full main page
    case SHOW_MAIN:
      return { ...state, mainPage: true, menuPage: false }

    // show menu selections
    case SHOW_MENU:
      return { ...state, mainPage: false, menuPage: true }

    default:
      return state;
  }
}
