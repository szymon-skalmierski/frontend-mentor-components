import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss']
})
export class CrewComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    document.body.classList.remove('crew-bg', 'technology-bg', 'home-bg', 'destination-bg');
    document.body.classList.add('crew-bg');
  }
}
