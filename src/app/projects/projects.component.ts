import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {

  projectInformation = {
    project1: {
      techs: ["HTML", "CSS", "JAVASCRIPT", "MATERIALIZE  CSS"],
      about: "The Classic minesweeper games made entirely in vanilla javascript and materilize css",
      github: "https://github.com/Ozoubia/mine-Sweeper"
    },
    project2: {
      techs: ["IONIC", "Laravel", "FIREBASE", "MYSQL", "GOOGLE STREET MAP"],
      about: "",
      github: ""
    }

  }




  constructor() { }

  ngOnInit(): void {

  }

  filterSelection(type) {

    let x = document.getElementsByClassName("prj");

    for (let i = 0; i < x.length; i++) {
      if (type == "all") {
        x[i].classList.remove('hide');
        // x[i].classList.add('show');
      } else if (x[i].className.includes(type)) {
        x[i].classList.remove('hide');
      } else {
        x[i].classList.add('hide');
      }



    }
  }


}
