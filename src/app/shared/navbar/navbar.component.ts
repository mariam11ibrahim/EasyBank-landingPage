import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isNavMenueHidden=true;
  constructor() { }
  
  ngOnInit(): void {
  }

  // hide the nav menue in large screen
  @HostListener('window:resize', ['$event'])
  onResize(event){
    if(event.target.innerWidth>790){
      this.isNavMenueHidden=true;
    }
  }

  toggleNav(){
    this.isNavMenueHidden=!this.isNavMenueHidden;  }

}
