import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements AfterViewInit {

  ngAfterViewInit() {
    document.body.style.backgroundImage = 'url(/assets/home/background-home-desktop.jpg)';
  }
}
