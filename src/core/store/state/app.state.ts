import { Language } from 'src/app/enums/language-enum';
import { Theme } from 'src/app/enums/theme-enum';

export interface IAppState {
    language: Language | null;
    theme: Theme | null;
}

export const initialAppState: IAppState = {
    language: null,
    theme: null
}
