import { AppActionTypes } from './actionTypes';

export enum AppActions {
    APPLICATION_LOAD = 'APPLICATION_LOAD'
}

export const applicationLoad = ():AppActionTypes => ({
    type: AppActions.APPLICATION_LOAD
});
