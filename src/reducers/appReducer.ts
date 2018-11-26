import { combineReducers, AnyAction } from 'redux';
import createReducer from 'redux-action-reducer';
import { AppActions } from '../actions';
import { IAppState } from '../models/state';

const test = createReducer(
  [AppActions.APPLICATION_LOAD, () => 'Initialised']
)('');

export const appReducer = combineReducers<IAppState, AnyAction>({
  test
});
