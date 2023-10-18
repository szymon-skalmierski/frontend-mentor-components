import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as data from '../../../data.json';
import { DestinationComponent } from './destination.component';
import { DestinationTargetComponent } from './destination-target/destination-target.component';

const crewData = data;

const routes: Routes = [
  {
    path: '',
    component: DestinationComponent,
    children: [
      {
        path: '',
        redirectTo: 'Moon',
        pathMatch: 'full'
      },
      {
        path: 'Moon',
        component: DestinationTargetComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DestinationRoutingModule {}
