import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements AfterViewInit {

  ngAfterViewInit() {
    document.body.classList.remove('crew-bg', 'technology-bg', 'home-bg', 'destination-bg');
    document.body.classList.add('home-bg');
  }
}
