import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as dataJSON from '../../../data.json';
import { TechnologyComponent } from './technology.component';
import { TechnologySolutionComponent } from './technology-solution/technology-solution.component';

const data = dataJSON;

const routes: Routes = [
  {
    path: '',
    component: TechnologyComponent,
    children: [
      {
        path: '',
        redirectTo: 'LaunchVehicle',
        pathMatch: 'full'
      },
      {
        path: 'LaunchVehicle',
        component: TechnologySolutionComponent,
        data: data.technology[0]
      },
      {
        path: 'SpacePort',
        component: TechnologySolutionComponent,
        data: data.technology[1]
      },
      {
        path: 'SpaceCapsule',
        component: TechnologySolutionComponent,
        data: data.technology[2]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechnologyRoutingModule {}
