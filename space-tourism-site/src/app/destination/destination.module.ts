import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationComponent } from './destination.component';
import { DestinationRoutingModule } from './destination-routing.module';
import { DestinationTargetComponent } from './destination-target/destination-target.component';



@NgModule({
  declarations: [
    DestinationComponent,
    DestinationTargetComponent
  ],
  imports: [
    CommonModule,
    DestinationRoutingModule
  ]
})
export class DestinationModule { }
