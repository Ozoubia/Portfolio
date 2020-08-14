import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {

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
