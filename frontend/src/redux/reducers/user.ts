import {Reducer} from 'redux'
import { Store } from '../Store'
import { Action } from '../Action'


const user: Reducer<Store['user'], Action> = (state = { accessToken: null }, action) => {
  switch (action.type) {
    case 'user/access-token':
      return {
        ...state,
        accessToken: action.payload.accessToken,
      }

    case 'user/user-details':
        return {
            ...state,
            ...action.payload
        }
  }
  return state
}

export default user
