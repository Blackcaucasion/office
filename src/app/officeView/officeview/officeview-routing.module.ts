import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfficeviewComponent } from './officeview.component';



const routes: Routes = [
  {
    path: '',
    component: OfficeviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfficeViewRoutingModule { }