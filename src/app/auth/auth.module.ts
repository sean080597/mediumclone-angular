import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterModule, Routes } from "@angular/router"

import { RegisterComponet } from "src/app/auth/components/register/register.component"
import { ReactiveFormsModule } from "@angular/forms"

const routes: Routes = [
  { path: 'register', component: RegisterComponet }
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [RegisterComponet],
})

export class AuthModule { }
