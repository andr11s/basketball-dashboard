import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonNavbarComponent } from './common-component/common-navbar/common-navbar.component';
import { DashboardHomeComponent } from './pages/dashboard-home/dashboard-home.component';

const routes: Routes = [{
  path: 'app',
  component: CommonNavbarComponent,
  children: [
    {
      path: '',
      loadChildren: () => import('./pages/pages.module').then((p) => p.PagesModule),
    }
  ]
},
{
  path: '**',
  redirectTo: '/app'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
