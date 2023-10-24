import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    document.body.classList.remove('crew-bg', 'technology-bg', 'home-bg', 'destination-bg');
    document.body.classList.add('technology-bg');
  }
}
