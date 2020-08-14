import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prj-template',
  templateUrl: './prj-template.component.html',
  styleUrls: ['./prj-template.component.scss']
})
export class PrjTemplateComponent implements OnInit {

  @Input() prjName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
