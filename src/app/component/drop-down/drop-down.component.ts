import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {

lang;
  constructor() { }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en';
  }
changeLanguage(lang){
  console.log(lang);
  localStorage.setItem('lang',lang);
  window.location.reload();
}
}
