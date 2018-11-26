import { Action, AnyAction } from 'redux';
import { of } from 'rxjs';
import { combineEpics, Epic } from 'redux-observable';

import { applicationLoad } from '../actions';
import { IAppState } from '../models/state';

/**
 *  Initial effect to trigger data requests
 */
export const applicationLoadEffect:Epic<AnyAction, AnyAction, IAppState> = () => of(applicationLoad());

export const coreEffects:Epic<Action, Action, IAppState, any> = combineEpics(
  applicationLoadEffect
);
