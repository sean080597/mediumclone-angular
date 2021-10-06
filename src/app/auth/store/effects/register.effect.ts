import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { of } from "rxjs"
import { catchError, map, switchMap, tap } from "rxjs/operators"
import { HttpErrorResponse } from "@angular/common/http"

import { registerAction, registerFailureAction, registerSuccessAction } from "src/app/auth/store/actions/register.action"
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface"
import { AuthService } from "src/app/auth/services/auth.service"
import { PersistanceService } from "src/app/shared/services/persistance.service"
import { Router } from "@angular/router"

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() => this.actions$.pipe(
    ofType(registerAction),
    switchMap(({ request }) => {
      return this.authService.register(request).pipe(
        map((currentUser: CurrentUserInterface) => {
          this.persistanceService.set('accessToken', currentUser.token)
          return registerSuccessAction({ currentUser })
        }),
        catchError((errorResponse: HttpErrorResponse) => {
          return of(registerFailureAction({ errors: errorResponse.error.errors }))
        })
      )
    })
  ))

  redirectAfterSubmit$ = createEffect(
    () => this.actions$.pipe(
      ofType(registerSuccessAction),
      tap(() => {
        this.router.navigateByUrl('/')
      })
    ),
    { dispatch: false }
  )

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService,
    private router: Router
  ) { }
}