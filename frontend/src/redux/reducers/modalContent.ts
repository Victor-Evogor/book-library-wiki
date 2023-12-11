import { Store } from "../Store";
import { Action } from "../Action";
import { Reducer } from "redux";

const modalContent: Reducer<Store['modalContent'], Action> = (state=null, action) => {
    if (action.type === 'modal-content'){
        return action.payload
    }
    return state
}

export default modalContent

