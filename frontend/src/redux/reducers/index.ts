import { combineReducers } from 'redux'
import { Store } from '../Store'
import { Action } from '../Action'

const rootReducer = combineReducers<Store, Action>({
  // add reducers here
  user: (state = { accessToken: null }, action) => {
    switch (action.type) {
      case 'user/access-token':
        return {
          ...state,
          accessToken: action.payload.accessToken,
        }
    }
    return state
  },
})

export default rootReducer
