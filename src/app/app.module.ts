import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatButtonModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatIconModule, 
  MatDatepickerModule, 
  MatNativeDateModule, 
  MatDividerModule, 
  MatTooltipModule, 
  MatStepperModule,
  MatExpansionModule,
  MatSnackBarModule,
  MatListModule,
  MatProgressSpinnerModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AngularFontAwesomeModule } from '../../node_modules/angular-font-awesome';
import { ContactComponent } from './components/contact/contact.component';
import { WebComponent } from './components/web/web.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';

// Services
import { CountdownService } from './services/countdown.service';

// Firebase
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    WebComponent,
    ComingSoonComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatTooltipModule,
    MatStepperModule,
    AppRoutingModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatListModule,
    MatProgressSpinnerModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [CountdownService],
  bootstrap: [AppComponent]
})
export class AppModule { }
