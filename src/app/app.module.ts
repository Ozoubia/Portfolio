import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// added
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { MainAreaComponent } from './main-area/main-area.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsAreaComponent } from './skills-area/skills-area.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainAreaComponent,
    AboutMeComponent,
    SkillsAreaComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    ExperienceComponent,
    EducationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
