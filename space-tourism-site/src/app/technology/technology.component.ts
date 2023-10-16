import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    document.body.style.backgroundImage = 'url(/assets/technology/background-technology-desktop.jpg)';
  }
}
