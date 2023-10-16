import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    document.body.style.backgroundImage = 'url(/assets/destination/background-destination-desktop.jpg)';
  }
}
