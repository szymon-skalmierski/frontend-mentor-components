import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-destination-target',
  templateUrl: './destination-target.component.html',
  styleUrls: ['./destination-target.component.scss']
})
export class DestinationTargetComponent implements OnInit {
  destinationTargetData: any;

  constructor(private route: ActivatedRoute){}

  ngOnInit() {
    this.route.data.subscribe(data=>{this.destinationTargetData=data; console.log(this.destinationTargetData)});
  }
}
