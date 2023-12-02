import {AnyAction} from '@reduxjs/toolkit'
import { ActionTypes } from './ActionTypes'

export interface Action extends AnyAction{
    readonly type: ActionTypes,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    readonly payload?: any
}