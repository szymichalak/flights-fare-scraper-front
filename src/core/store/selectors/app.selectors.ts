import { IAppState } from '../state/app.state';
import { createSelector, createFeatureSelector } from '@ngrx/store';
export const appSelector = createFeatureSelector<IAppState>('app');

export const getLanguage = createSelector(appSelector,(app:IAppState)=>app.language)
export const getTheme = createSelector(appSelector,(app:IAppState)=>app.theme)
