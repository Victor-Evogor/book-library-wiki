import { AnyAction } from '@reduxjs/toolkit';
import { ActionTypes } from './ActionTypes';

export interface Action extends AnyAction {
  readonly type: ActionTypes;
  // Conditionally set the type of payload based on the value of type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly payload?: any
}
