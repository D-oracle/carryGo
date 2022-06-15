import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RidersComponent } from './riders/riders.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'riders', component: RidersComponent },
      { path: 'staff', component: StaffComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
