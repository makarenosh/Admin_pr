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
        {title: 'Settings', url: '/settings'},
        {title: 'Promesas', url: '/promesas'},
        {title: 'RXJS', url: '/rxjs'}
      ]
    },
    {
      title: 'Mantenimiento',
      icon: 'mdi mdi-folder-lock-open',
      submenu: [
        { title: 'Users', url: '/users' },
        { title: 'Hospitals', url: '/hospitals' },
        { title: 'Doctors', url: '/doctors' }
      ]
    }
  ];

  constructor() { }
}
