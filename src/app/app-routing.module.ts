import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OfficeviewComponent } from './officeView/officeview/officeview.component';

const routes: Routes = [
  { path:'',component:HomeComponent},
  // { path:'office',component:OfficeviewComponent},
  // { path:'office/:id',component:OfficeviewComponent},
  {
    path: 'office/:id',
    loadChildren: () => import('./officeView/officeview/officeview.module').then(m => m.OfficeViewModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
