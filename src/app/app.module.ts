import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorDashboardComponent } from './modules/doctor/components/doctor-dashboard/doctor-dashboard.component';
import { DoctorsAppointmentsComponent } from './modules/doctor/components/doctors-appointments/doctors-appointments.component';
import { DoctorsCasesComponent } from './modules/doctor/components/doctors-cases/doctors-cases.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { PatientloginComponent } from './patientlogin/patientlogin.component';
import { PatientregisterComponent } from './patientregister/patientregister.component';
import { DoctorregisterComponent } from './doctorregister/doctorregister.component';
import { PatientDashboardComponent } from './modules/patient/components/patient-dashboard/patient-dashboard.component';
import { PatientNavbarComponent } from './modules/patient/components/patient-navbar/patient-navbar.component';
import { PatientHomeComponent } from './modules/patient/components/patient-home/patient-home.component';
import { PatientDoctorsComponent } from './modules/patient/components/patient-doctors/patient-doctors.component';
import { PatientAppointmentsComponent } from './modules/patient/components/patient-appointments/patient-appointments.component';
import { PatientBillsComponent } from './modules/patient/components/patient-bills/patient-bills.component';
import { PatientMedRecordsComponent } from './modules/patient/components/patient-med-records/patient-med-records.component';
import { DoctorNavbarComponent } from './modules/doctor/components/doctor-navbar/doctor-navbar.component';
import { DoctorHomeComponent } from './modules/doctor/components/doctor-home/doctor-home.component';
import { DoctorPatientsComponent } from './modules/doctor/components/doctor-patients/doctor-patients.component';
import { DoctorProfileComponent } from './modules/doctor/components/doctor-profile/doctor-profile.component';
import { DoctorEditProfileComponent } from './modules/doctor/components/doctor-edit-profile/doctor-edit-profile.component';
import { PatientProfileComponent } from './modules/patient/components/patient-profile/patient-profile.component';
import { PatientEditProfileComponent } from './modules/patient/components/patient-edit-profile/patient-edit-profile.component';




@NgModule({
  declarations: [
    AppComponent,
    DoctorDashboardComponent,
    DoctorsAppointmentsComponent,
    DoctorsCasesComponent,
    WelcomeComponent,
    DocloginComponent,
    PatientloginComponent,
    PatientregisterComponent,
    DoctorregisterComponent,
    PatientDashboardComponent,
    PatientNavbarComponent,
    PatientHomeComponent,
    PatientDoctorsComponent,
    PatientAppointmentsComponent,
    PatientBillsComponent,
    PatientMedRecordsComponent,
    DoctorNavbarComponent,
    DoctorHomeComponent,
    DoctorPatientsComponent,
    DoctorProfileComponent,
    DoctorEditProfileComponent,
    PatientProfileComponent,
    PatientEditProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
