import { Component, OnInit } from '@angular/core';
import { SidebarService, UserService } from 'src/app/services/service.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    public _sidebarService : SidebarService,
    public userService: UserService
  ) { }

  ngOnInit() {
    console.log(this._sidebarService.menu);    
  }

}
