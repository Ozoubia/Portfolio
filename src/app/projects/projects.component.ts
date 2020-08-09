import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import Isotope from 'isotope-layout';
declare var $: $


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {
  
  constructor() { }



  ngOnInit(): void {
    // selecting all buttons
    let $btns = $('.buttons-group button');
    
    $btns.click(function(e){
      $('.buttons-group button').removeClass('active');
      e.target.classList.add('active');

      let selector = $(e.target).attr('data-filter');
      $('.grid').isotope({
        filter: selector
      })

      return false;
    })

  }


}
