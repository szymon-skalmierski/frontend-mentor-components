import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrewRoutingModule } from './crew-routing.module';
import { CrewMemberComponent } from './crew-member/crew-member.component';



@NgModule({
  declarations: [
    CrewMemberComponent
  ],
  imports: [
    CommonModule,
    CrewRoutingModule
  ]
})
export class CrewModule { }
