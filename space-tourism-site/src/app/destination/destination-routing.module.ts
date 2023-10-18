import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as dataJSON from '../../../data.json';
import { DestinationComponent } from './destination.component';
import { DestinationTargetComponent } from './destination-target/destination-target.component';

const data = dataJSON;

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
        component: DestinationTargetComponent,
        data: data.destinations[0]
      },
      {
        path: 'Mars',
        component: DestinationTargetComponent,
        data: data.destinations[1]
      },
      {
        path: 'Europe',
        component: DestinationTargetComponent,
        data: data.destinations[2]
      },
      {
        path: 'Titan',
        component: DestinationTargetComponent,
        data: data.destinations[3]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DestinationRoutingModule {}
