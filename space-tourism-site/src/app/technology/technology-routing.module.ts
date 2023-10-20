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
        path: 'SpacePort',
        component: TechnologySolutionComponent
      },
      {
        path: 'SpaceCapsule',
        component: TechnologySolutionComponent
      },
      {
        path: 'LaunchVehicle',
        component: TechnologySolutionComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechnologyRoutingModule {}
