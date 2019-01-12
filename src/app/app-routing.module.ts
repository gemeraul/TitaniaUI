import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { WebComponent } from './components/web/web.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component'
import { DesignComponent } from './components/design/design.component';
import { OurTeamComponent } from './components/our-team/our-team.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'web', component: WebComponent },
  { path: 'portfolio', component: ComingSoonComponent },
  { path: 'ourteam', component: OurTeamComponent },
  { path: 'design', component: DesignComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
