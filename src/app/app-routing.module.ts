import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { WebComponent } from './components/web/web.component';
import { MobileComponent } from './components/mobile/mobile.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'web', component: WebComponent },
  { path: 'portfolio', component: ComingSoonComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '/home' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
