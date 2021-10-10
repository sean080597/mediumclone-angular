import { Component, OnInit } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { select, Store } from "@ngrx/store"
import { Observable } from "rxjs"

import { registerAction } from "src/app/auth/store/actions/register.action"
import { isSubmittingSelector, validationErrorsSelector } from "src/app/auth/store/selectors"
import { AppStateInterface } from "src/app/shared/types/appState.interface"
import { RegisterRequestInterface } from "src/app/auth/types/registerRequest.interface"
import { BackendErrorInterface } from "src/app/shared/types/backendErrors.interface"

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup
  isSubmitting$: Observable<boolean>
  backendError$: Observable<BackendErrorInterface | null>

  constructor(private fb: FormBuilder, private store: Store<AppStateInterface>) { }

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendError$ = this.store.pipe(select(validationErrorsSelector))
  }

  initializeForm(): void {
    console.log('initalizeForm')
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(): void {
    console.log('submit', this.form.value, this.form.valid)
    const request: RegisterRequestInterface = {
      user: this.form.value
    }
    this.store.dispatch(registerAction({ request }))
  }
}
