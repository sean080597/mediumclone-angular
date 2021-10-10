import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterModule, Routes } from "@angular/router"
import { ReactiveFormsModule } from "@angular/forms"
import { StoreModule } from "@ngrx/store"
import { EffectsModule } from "@ngrx/effects"

import { RegisterComponent } from "src/app/auth/components/register/register.component"
import { reducers } from "src/app/auth/store/reducers"
import { AuthService } from "src/app/auth/services/auth.service"
import { RegisterEffect } from "src/app/auth/store/effects/register.effect"
import { BackendErrorMessageModule } from "src/app/shared/modules/backendErrorMessages/backendErrorMessages.module"
import { PersistanceService } from "src/app/shared/services/persistance.service"

const routes: Routes = [
  { path: 'register', component: RegisterComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect]),
    BackendErrorMessageModule
  ],
  declarations: [RegisterComponent],
  providers: [AuthService, PersistanceService]
})

export class AuthModule { }
