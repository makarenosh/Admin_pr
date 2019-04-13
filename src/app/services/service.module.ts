import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService, SharedService, SidebarService, UserService, LoginGuardGuard, UploadFileService } from './service.index';
import { HttpClientModule } from '@angular/common/http';

SettingsService

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule 
  ],
  providers: [
    SettingsService, SharedService, SidebarService, UserService, LoginGuardGuard, UploadFileService
  ],
  declarations: []
})
export class ServiceModule { }
