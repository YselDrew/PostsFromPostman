import * as types from '../types'
import { ActionTypes } from '../../types/action.types';

export function beginApiCall(): ActionTypes {
  return { type: types.BEGIN_API_CALL };
}

export function apiCallError(): ActionTypes {
  return { type: types.API_CALL_ERROR };
}
