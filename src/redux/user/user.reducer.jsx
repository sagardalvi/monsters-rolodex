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
    case UserActionTypes.ADD_USER:
      return {
        ...state,
        monsters: [action.payload, ...state.monsters]
      }
    default:
      return state

  }
}

export default userReducer;