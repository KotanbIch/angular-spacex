import { Component, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    '../../node_modules/primeflex/primeflex.css',
  ],
})
export class AppComponent {
  public title = 'SpaceX';
  public items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      { label: 'Crew', routerLink: '/crew' },
      { label: 'Rockets', routerLink: '/rockets' },
      { label: 'Land pads', routerLink: '/land-pads' },
      { label: 'Launches', routerLink: '/launches' },
      { label: 'Favourites', routerLink: '/favourites' },
    ];
  }
}
