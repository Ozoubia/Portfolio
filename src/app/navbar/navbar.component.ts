import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  aboutMeBtn() {
    document.getElementById('about').scrollIntoView()
  }

  skillsBtn() {
    document.getElementById('skills').scrollIntoView()
  }

  projectsBtn() {
    document.getElementById('projects').scrollIntoView()
  }

  contactBtn() {
    document.getElementById('contact').scrollIntoView()
  }



}
