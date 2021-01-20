
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AppActionTypes } from '../actions/app.actions';
import { map, switchMap, tap } from 'rxjs/operators';


@Injectable()
export class AppEffects {

    // @Effect()
    // loadCurrentUser$ = this._actions$.pipe(
    //     ofType<LoadCurrentUser>(AppActionTypes.LoadCurrentUser),
    //     switchMap(() => this._loginService.getCurrentUser()),
    //     map((user: EKontoUser) => new LoadCurrentUserSuccess({ user: user }))
    // );


    // @Effect({dispatch: false})
    // putEctsCard$ = this._actions$.pipe(
    //     ofType<PutEctsCard>(EctsActionTypes.PutEctsCard),
    //     switchMap(async (action) => this._ectsService.putEctsCard(action.payload.card))
    // );


    constructor(
        private _actions$: Actions
        // private _loginService: LoginService
    ) { }
}
