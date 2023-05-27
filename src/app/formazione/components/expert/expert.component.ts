import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expert',
  templateUrl: './expert.component.html',
  styleUrls: ['./expert.component.scss']
})
export class ExpertComponent implements OnInit {
selectedof: boolean = false;
selectedexp: boolean = true;
selectedtrade: boolean = false;
selectedcopy: boolean = false;
selecteddev: boolean = false;

select(row : string){
 switch(row){
   case 'exp':
    this.selectedexp = true;
    this.selectedtrade = false;
this.selectedcopy = false;
this.selecteddev = false;
this.selectedof = false;
    break;
   case 'trade':
    this.selectedtrade = true;
    this.selectedof = false;
this.selectedexp = false;
    this.selectedcopy = false;
this.selecteddev = false;
    break;
   case 'copy':
    this.selectedcopy = true;
    this.selecteddev = false;
    this.selectedof = false;
this.selectedexp = false;
this.selectedtrade = false;
    break;
   case 'dev':
    this.selecteddev = true;
    this.selectedof = false;
this.selectedexp = false;
this.selectedtrade = false;
this.selectedcopy = false;
    break;
   case 'of':
    this.selectedof = true;
    this.selectedexp = false;
this.selectedtrade = false;
this.selectedcopy = false;
this.selecteddev = false;
    break;
 }
}
  constructor() { }

  ngOnInit(): void {
  }

}
