import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrewComponent } from './crew.component';
import * as data from '../../../data.json';

const crewData = data;

const routes: Routes = [
  {
    path: 'victor',
    component: CrewComponent,
    data: crewData.crew[2]
  },
  {
    path: 'mark',
    component: CrewComponent,
    data: crewData.crew[1]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'victor'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrewRoutingModule {}
