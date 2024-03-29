import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isActive = false;

  changeNavState(e: Event) {
    e.stopPropagation();
    this.isActive = !this.isActive;
  }
}
