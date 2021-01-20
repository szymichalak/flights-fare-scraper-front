import { Action } from '@ngrx/store';
import { Language } from 'src/app/enums/language-enum';
import { Theme } from 'src/app/enums/theme-enum';


export enum AppActionTypes {
  SetLanguage = '[App] Set Language',
  SetTheme = '[App] Set Theme'
}


export class SetLanguage implements Action {
  public readonly type = AppActionTypes.SetLanguage
  public constructor(public payload: { language: Language }) { }
}

export class SetTheme implements Action {
  public readonly type = AppActionTypes.SetTheme
  public constructor(public payload: { theme: Theme }) { }
}


export type AppActions
= 
| SetLanguage
| SetTheme;
