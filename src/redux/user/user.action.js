import {UserActionTypes} from './user.types';

export const addUsersList = users => ({
  type: UserActionTypes.ADD_USER_LIST,
  payload: users
})

export const addUser = user => ({
  type: UserActionTypes.ADD_USER,
  payload: user
})