import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService, SharedService, SidebarService, UserService, LoginGuardGuard, UploadFileService, DoctorService, HospitalService } from './service.index';
import { HttpClientModule } from '@angular/common/http';
import { UploadModalService } from '../components/upload-window/upload-modal.service';

SettingsService

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule 
  ],
  providers: [
    SettingsService, SharedService, SidebarService, UserService, LoginGuardGuard, UploadFileService, UploadModalService, DoctorService, HospitalService
  ],
  declarations: []
})
export class ServiceModule { }
