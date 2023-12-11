import { Store } from "../Store"
import { Reducer } from 'redux'
import { Action } from "../Action"

const isModalOpen: Reducer<Store['isModalOpen'], Action> = (state=false, action) => {
    if (action.type === 'is-modal-open/toggle'){
        return action.payload
    }
    return state
}

export default isModalOpen