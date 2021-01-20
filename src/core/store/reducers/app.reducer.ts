import { AppActionTypes, AppActions } from '../actions/app.actions';
import { IAppState, initialAppState } from '../state/app.state';

export function appReducer(state = initialAppState, action: AppActions): IAppState {
  switch (action.type) {
    case AppActionTypes.SetLanguage:
      return {
        ...state,
        language: action.payload.language
      };

    case AppActionTypes.SetTheme:
      return {
        ...state,
        theme: action.payload.theme
      };      

    default:
      return state;
  }
}
