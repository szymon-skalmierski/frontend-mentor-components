import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    document.body.classList.remove('crew-bg', 'technology-bg', 'home-bg', 'destination-bg');
    document.body.classList.add('destination-bg');
  }
}
