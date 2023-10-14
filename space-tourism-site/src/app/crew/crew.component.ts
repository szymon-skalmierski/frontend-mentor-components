import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss']
})
export class CrewComponent {
  crewMemberData: any;

  constructor(private route: ActivatedRoute){}

  ngOnInit() {
    this.route.data.subscribe(data=>this.crewMemberData=data);
  }

}
