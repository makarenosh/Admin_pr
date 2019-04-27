import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService, SharedService, SidebarService, UserService, LoginGuardGuard, UploadFileService } from './service.index';
import { HttpClientModule } from '@angular/common/http';
import { UploadModalService } from '../components/upload-window/upload-modal.service';

SettingsService

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule 
  ],
  providers: [
    SettingsService, SharedService, SidebarService, UserService, LoginGuardGuard, UploadFileService, UploadModalService
  ],
  declarations: []
})
export class ServiceModule { }
