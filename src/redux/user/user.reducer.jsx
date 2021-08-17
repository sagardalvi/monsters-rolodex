import {UserActionTypes} from './user.types';

const INITIAL_STATE = {
  monsters: []
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.ADD_USER_LIST:
      return {
        ...state,
        monsters: action.payload
      };
    default:
      return state

  }
}

export default userReducer;