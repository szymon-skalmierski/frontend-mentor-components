import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crew-member',
  templateUrl: './crew-member.component.html',
  styleUrls: ['./crew-member.component.scss']
})
export class CrewMemberComponent implements OnInit {
  crewMemberData: any;

  constructor(private route: ActivatedRoute){}

  ngOnInit() {
    this.route.data.subscribe(data => this.crewMemberData=data);
  }
}
