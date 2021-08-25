import {UserActionTypes} from './user.types';

const INITIAL_STATE = {
  monsters: [],
  monster:  {
    id: 1,
    name: null,
    email: null,
    address: {
      street: null,
      suite: null,
      city: null,
      zipcode: null
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      bs: "harness real-time e-markets"
    }
  }
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
    case UserActionTypes.GET_USER:
      let existingMonster = state.monsters.find(monster => monster.id === action.payload);
      return {
        ...state,
        monster: {
          ...existingMonster
        }
      }
    default:
      return state

  }
}

export default userReducer;