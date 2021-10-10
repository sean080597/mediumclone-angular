import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { BasicComponent } from "src/app/globalFeed/components/basic/basic.component"
import { AppPipesModule } from "src/app/shared/modules/appPipes/appPipes.module"
import { BasicUserComponent } from "src/app/globalFeed/components/basic-user/basic-user.component"

const routes: Routes = [
  { path: 'basic', component: BasicComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AppPipesModule,
  ],
  declarations: [BasicComponent, BasicUserComponent],
  providers: []
})
export class GlobalFeedModule { }
