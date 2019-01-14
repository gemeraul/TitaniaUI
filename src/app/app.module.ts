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
  MatProgressSpinnerModule,
  MatCardModule,
  MatDialogModule,
  MatTabsModule
} from '@angular/material';
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
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { DesignComponent } from './components/design/design.component';
import { QuoteComponent } from './components/quote/quote.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { PersonCardComponent } from './components/person-card/person-card.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    WebComponent,
    ComingSoonComponent,
    DesignComponent,
    QuoteComponent,
    OurTeamComponent,
    PersonCardComponent,
    PortfolioComponent,
    SocialMediaComponent
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
    MatCardModule,
    MatDialogModule,
    MatTabsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [CountdownService],
  bootstrap: [AppComponent],
  entryComponents: [
    PersonCardComponent
  ],
})
export class AppModule { }
