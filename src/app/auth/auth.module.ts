import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterModule, Routes } from "@angular/router"
import { ReactiveFormsModule } from "@angular/forms"
import { StoreModule } from "@ngrx/store"

import { RegisterComponet } from "src/app/auth/components/register/register.component"
import { reducers } from "src/app/auth/store/reducers"

const routes: Routes = [
  { path: 'register', component: RegisterComponet }
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers)
  ],
  declarations: [RegisterComponet],
})

export class AuthModule { }
