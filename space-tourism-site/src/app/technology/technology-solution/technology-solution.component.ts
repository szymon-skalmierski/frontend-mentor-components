import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-technology-solution',
  templateUrl: './technology-solution.component.html',
  styleUrls: ['./technology-solution.component.scss']
})
export class TechnologySolutionComponent implements OnInit {
  technologySolutionData: any;

  constructor(private route: ActivatedRoute){}

  ngOnInit() {
    this.route.data.subscribe(data => this.technologySolutionData=data);
  }
}
