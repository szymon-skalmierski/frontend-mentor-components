import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent,
  },
  {
    path: 'destination',
    loadChildren: () => import('./destination/destination.module').then(m=>m.DestinationModule)
  },
  {
    path: 'crew',
    loadChildren: () => import('./crew/crew.module').then(m=>m.CrewModule)
  },
  {
    path: 'technology',
    loadChildren: () => import('./technology/technology.module').then(m=>m.TechnologyModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
