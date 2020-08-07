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


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainAreaComponent,
    AboutMeComponent,
    SkillsAreaComponent,

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
