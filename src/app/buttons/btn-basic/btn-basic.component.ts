import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-basic',
  templateUrl: './btn-basic.component.html',
  styleUrls: ['./btn-basic.component.scss']
})
export class BtnBasicComponent implements OnInit {
@Input() text!: string
@Input() href!: string



  constructor() { }

  ngOnInit(): void {
  }
}
