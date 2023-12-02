import {useDispatch} from 'react-redux'
import { Dispatch } from 'redux'
import { Action } from './Action'


const useCreateDispatcher = ()=> {
    return useDispatch<Dispatch<Action>>()
}

export default useCreateDispatcher