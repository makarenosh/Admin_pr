import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any = [
    {
      title: 'Main',
      icon: 'mdi mdi-gauge',
      submenu: [
        {title: 'Dashboard', url: '/dashboard'},
        {title: 'Graphs', url: '/graphs1'},
        {title: 'Progress', url: '/progress'},
        {title: 'Settings', url: '/settings'}
      ]
    }
  ];

  constructor() { }
}
