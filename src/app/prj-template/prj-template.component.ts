import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prj-template',
  templateUrl: './prj-template.component.html',
  styleUrls: ['./prj-template.component.scss']
})
export class PrjTemplateComponent implements OnInit {

  // modal setting
  closeResult: string;
  modalOptions: NgbModalOptions;

  // project info
  @Input() prjName: string;
  @Input() imgPath: string;
  @Input() prjInfo: any;


  constructor(private modalService: NgbModal, private router: Router) {
    // modal setting
    this.modalOptions = {
      backdrop: true,
      // backdropClass: 'customBackdrop',
      centered: true
    }
  }

  ngOnInit(): void {
  }

  // used for the modal
  prjImgClick(content) {
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  // used for the modal
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  SourceBtn(link) {
    if (link != "") {
      window.open(link);
    }
  }
}
