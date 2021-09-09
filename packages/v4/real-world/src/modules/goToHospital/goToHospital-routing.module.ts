import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomePageComponent } from './homePage'

const routes: Routes = [
  {
    path: 'go-to-hospital',
    children: [
      {
        path: '',
        redirectTo: '/go-to-hospital',
        pathMatch: 'full'
      },
      {
        path: '',
        component: HomePageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoToHospitalRoutingModule { }
