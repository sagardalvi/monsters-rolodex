import {UserActionTypes} from './user.types';

export const addUsersList = users => ({
  type: UserActionTypes.ADD_USER_LIST,
  payload: users
})