import { Component, OnInit } from '@angular/core';
import * as awesom from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  mapMarker: any ;
  email:any;
  birthday:any;
  badge:any;
  constructor() {
    
   }

  ngOnInit(): void {
    this.mapMarker=awesom.faMapMarker;
    this.email=awesom.faMailBulk;
    this.birthday=awesom.faBirthdayCake;
    this.badge=awesom.faGraduationCap;

  }

}
