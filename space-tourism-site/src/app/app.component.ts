import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'space-tourism-site';
  imgs: any[] = [];

  ngOnInit() {
    this.pload(
      "/assets/crew/background-crew-desktop.jpg",
      "/assets/home/background-home-desktop.jpg",
      "/assets/technology/background-technology-desktop.jpg",
      "/assets/destination/background-destination-desktop.jpg",
    );
  }

  pload(...args: any[]):void {
    for(let imgPath of args) {
      const img = new Image();
      img.src = imgPath;
      this.imgs.push(img);
    }
  }
}
