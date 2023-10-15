import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrewComponent } from './crew.component';
import * as data from '../../../data.json';
import { CrewMemberComponent } from './crew-member/crew-member.component';

const crewData = data;

const routes: Routes = [
  {
    path: '',
    component: CrewComponent,
    children: [
      {
        path: '',
        redirectTo: 'Victor',
        pathMatch: 'full'
      },
      {
        path: 'Douglas',
        component: CrewMemberComponent,
        data: crewData.crew[0]
      },
      {
        path: 'Mark',
        component: CrewMemberComponent,
        data: crewData.crew[1]
      },
      {
        path: 'Victor',
        component: CrewMemberComponent,
        data: crewData.crew[2]
      },
      {
        path: 'Anousheh',
        component: CrewMemberComponent,
        data: crewData.crew[3]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrewRoutingModule {}
