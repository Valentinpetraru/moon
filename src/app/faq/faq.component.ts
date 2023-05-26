import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  showAnswer: boolean = false;

  listFaq = [
    {domanda: ' How can I apply to be a FF Ambassador?', risposta: 'FlutterFlow Ambassadors are selected on a rolling basis. At this time, there is no open application to apply to become a FlutterFlow Ambassador.'},
    {domanda: ' How can I apply to be a FF Ambassador?', risposta: 'FlutterFlow Ambassadors are selected on a rolling basis. At this time, there is no open application to apply to become a FlutterFlow Ambassador.'},
    {domanda: ' How can I apply to be a FF Ambassador?', risposta: 'FlutterFlow Ambassadors are selected on a rolling basis. At this time, there is no open application to apply to become a FlutterFlow Ambassador.'},
    {domanda: ' How can I apply to be a FF Ambassador?', risposta: 'FlutterFlow Ambassadors are selected on a rolling basis. At this time, there is no open application to apply to become a FlutterFlow Ambassador.'},
    {domanda: ' How can I apply to be a FF Ambassador?', risposta: 'FlutterFlow Ambassadors are selected on a rolling basis. At this time, there is no open application to apply to become a FlutterFlow Ambassador.'},
    {domanda: ' How can I apply to be a FF Ambassador?', risposta: 'FlutterFlow Ambassadors are selected on a rolling basis. At this time, there is no open application to apply to become a FlutterFlow Ambassador.'},
    {domanda: ' How can I apply to be a FF Ambassador?', risposta: 'FlutterFlow Ambassadors are selected on a rolling basis. At this time, there is no open application to apply to become a FlutterFlow Ambassador.'},
    {domanda: ' How can I apply to be a FF Ambassador?', risposta: 'FlutterFlow Ambassadors are selected on a rolling basis. At this time, there is no open application to apply to become a FlutterFlow Ambassador.'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public changeAnswer(i:number){
    this.showAnswer = !this.showAnswer


  }
}
