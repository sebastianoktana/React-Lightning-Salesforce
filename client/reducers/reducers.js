

import { CHANGE_RISK, SHOW_USERS ,SET_ERROR_MESSAGE} from '../constants/AppConstants';

const assign = Object.assign;

const init = [200, 20, 200, 10, 20];

// The initial application state
const initialState = {
  currentlySending: false,
  errorMessage: '',
  risk: {
        risk: 1,
        init
      },
   list: [],
   request : false   
  };


const data = [300, 50, 100, 100, 20];
              data[0] = [300, 50, 100, 100, 20];
              data[1] = [200, 20, 200, 10, 20];
              data[2] = [120, 40, 150, 40, 10];
              data[3] = [5, 10, 300, 100, 100];
              data[4] = [400, 30, 100, 17, 100];
              data[5] = [300, 50, 10, 100, 40];
              data[6] = [100, 70, 180, 100, 50];
              data[7] = [200, 50, 10, 100, 90];
              data[8] = [500, 40, 106, 200, 20];
              data[9] = [10, 30, 100, 120, 40];
              data[10] = [300, 50, 100, 150, 10];


// Takes care of changing the application state
export function homeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ERROR_MESSAGE:
      return assign({}, state, {
        errorMessage: action.message
      });
    case CHANGE_RISK:
      return assign({}, state, {
        risk: action.risk,
        data: data[action.risk],
      });
      case SHOW_USERS:
      return assign({}, state, { 
        list: action.payload
      });
    default:
      return state;
  }
}
