import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologyComponent } from './technology.component';
import { TechnologySolutionComponent } from './technology-solution/technology-solution.component';
import { TechnologyRoutingModule } from './technology-routing.module';



@NgModule({
  declarations: [
    TechnologyComponent,
    TechnologySolutionComponent
  ],
  imports: [
    CommonModule,
    TechnologyRoutingModule
  ]
})
export class TechnologyModule { }
