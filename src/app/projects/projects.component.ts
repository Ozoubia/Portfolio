import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {

  // used to fill the information of the projects
  projectInformation = {
    project1: {
      techs: ["Html", "CSS|SCSS", "Typescript", "Bootstrap", "Angular"],
      about: "This is my portfolio of projects made with Angular and bootstrap",
      github: "https://github.com/Ozoubia/Portfolio"
    },
    project2: {
      techs: ["Ionic", "Laravel", "Firebase", "MYSQL", "Google street map"],
      about: "This application is a transport helping application with similar features to Uber and Yassir,I Implemented the front end of the company's mobile app (ICar Data Center Corporation) along with the front end team and in collaboration with the back end team.",
      github: ""
    },
    project3: {
      techs: ["Html", "CSS", "Javascript", "Materialize  CSS"],
      about: "The classic minesweeper games made entirely in vanilla javascript and materilize css.",
      github: "https://github.com/Ozoubia/mine-Sweeper"
    },
    project4: {
      techs: ["C#", "SQL Server Compact v4", "Material design", "WPF", "LiveCharts"],
      about: "A library's books and client's management windows application with advanced statistics, making the management of such system an easy task with user friendly design and rich features.",
      github: "https://github.com/Ozoubia/Libex"
    },
    project5: {
      techs: ["C#", "SQL Server Compact v4", "Material design", "WPF"],
      about: "This project is my bachelor's degree project, it is a hotel room's management system with a nice design and rich features for the management of rooms and clients, and a login system for the receptionist.",
      github: "https://github.com/Ozoubia/HotelManagementSystem"
    },
    project6: {
      techs: ["Python", "Streamlit", "Sklearn", "Numpy", "Matplotlib"],
      about: "A simple web app demonstating different classifiers (SVM, KNN and random forrest) on the (Iris dataset, digits dataset and breast cancer dataset).",
      github: "https://github.com/Ozoubia/Classifiers"
    },
    project7: {
      techs: ["Python", "Pandas", "Sklearn", "Numpy", "Seaborn"],
      about: "Solving the titanic data science challenge All steps are in the jupyter notebook",
      github: "https://github.com/Ozoubia/kaggle-titanic-challenge"
    },
    project8: {
      techs: ["Python", "Pandas", "Sklearn", "Numpy", "OpenCV", "Tensorflow"],
      about: "Building a model to classify flowers into different categories using convolutional neural networks",
      github: "https://github.com/Ozoubia/Flower-Classification-CNN"
    },
    project9: {
      techs: ["Python", "keras", "Numpy", "Matplotlib"],
      about: "Building a model to recognize the facial expression (sad, happy, angry...) using convolutional neural networks",
      github: "https://github.com/Ozoubia/facial-expression-recognition"
    },



  }

  constructor() { }

  ngOnInit(): void {

  }

  // function used for the filtering functionality in the projects
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
