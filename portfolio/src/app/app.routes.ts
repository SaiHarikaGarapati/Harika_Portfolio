import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home} from './components/home/home';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //to enable animations
//npm install @angular/animations
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'skills', component: Skills },
  { path: 'projects', component: Projects },
  { path: 'contact', component: Contact },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule {}
