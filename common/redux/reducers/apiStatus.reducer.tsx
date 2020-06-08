import * as types from '../types';
import { ActionTypes } from '../../types/action.types';

import initialState from './initialState';

function actionTypeEndsInSuccess(type): ActionTypes | undefined {
  if (type.substring(type.length - 8) === '_SUCCESS') {
    return type;
  }
}

export function apiStatusReducer(state = initialState.apiCallsInProgress, action) {
  switch (action.type) {
    case types.BEGIN_API_CALL:
      return state + 1;
    case types.API_CALL_ERROR:
    case actionTypeEndsInSuccess(action.type):
      return state - 1;
    default:
      return state;
  }
}
