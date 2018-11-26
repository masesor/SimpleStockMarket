import { Action } from 'redux';
import { AppActions } from '.';

export type AppActionTypes =
IApplicationLoad;

export interface IApplicationLoad extends Action {
type:AppActions.APPLICATION_LOAD;
}
