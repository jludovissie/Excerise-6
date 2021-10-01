import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  collapsed=false; 
  searchQuery='' ;
  allSearches= [] ;

  @Output () buttonPushed = new EventEmitter<string>() ; 
  constructor() { }

  ngOnInit(): void {}
  onSelect() {
    this.buttonPushed.emit(this.searchQuery)
  }

 
}
