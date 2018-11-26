import { Action, AnyAction } from 'redux';
import { of } from 'rxjs';
import { combineEpics, Epic } from 'redux-observable';

import { applicationLoad } from '../actions';
import { IAppState } from '../models/state';

/**
 *  @@INIT effect. once app is initialised.
 */
export const applicationLoadEffect:Epic<AnyAction, AnyAction, IAppState> = () => of(applicationLoad());

export const systemEffects:Epic<Action, Action, IAppState, any> = combineEpics(
  applicationLoadEffect,
);
