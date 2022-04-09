import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  MeDrawIsShown : boolean=false;
  MedicalTrackerIsShown : boolean=false;
  SparkyIsShown : boolean=false;
  CloudAPIIsShown : boolean=false;
  MakeKitIsShown: boolean=false;
  CityHuntIsShown: boolean=false;
  VRIsShown: boolean=false;
  SSIsShown: boolean=false;
  BloodMoonIsShown: boolean=false;
  EternalIsShown: boolean=false;
  venobox:any;
  constructor() { }
  detailOnClick(project:String){
    if(project=="MeDraw"){
      this.MeDrawIsShown = !this.MeDrawIsShown;
      this.MedicalTrackerIsShown=false;
      this.SparkyIsShown =false;
      this.CloudAPIIsShown=false;
      this.MakeKitIsShown=false;
      this.CityHuntIsShown=false;
      this.VRIsShown=false;
      this.SSIsShown=false;
      this.BloodMoonIsShown=false;
      this.EternalIsShown=false;
    }
    else if(project=="MedicalTracker"){
      this.MedicalTrackerIsShown = !this.MedicalTrackerIsShown;
      this.MeDrawIsShown=false;
      this.SparkyIsShown =false;
      this.CloudAPIIsShown=false;
      this.MakeKitIsShown=false;
      this.CityHuntIsShown=false;
      this.VRIsShown=false;
      this.SSIsShown=false;
      this.BloodMoonIsShown=false;
      this.EternalIsShown=false;
    }
    else if(project=="Sparky"){
      this.SparkyIsShown = !this.SparkyIsShown;
      this.MeDrawIsShown=false;
      this.MedicalTrackerIsShown =false;
      this.CloudAPIIsShown=false;
      this.MakeKitIsShown=false;
      this.CityHuntIsShown=false;
      this.VRIsShown=false;
      this.SSIsShown=false;
      this.BloodMoonIsShown=false;
      this.EternalIsShown=false;
    }
    else if(project=="CloudAPI"){
      this.CloudAPIIsShown = !this.CloudAPIIsShown;
      this.MeDrawIsShown=false;
      this.MedicalTrackerIsShown =false;
      this.SparkyIsShown=false;
      this.MakeKitIsShown=false;
      this.CityHuntIsShown=false;
      this.VRIsShown=false;
      this.SSIsShown=false;
      this.BloodMoonIsShown=false;
      this.EternalIsShown=false;
    }
    else if(project=="MakeKit"){
      this.MakeKitIsShown = !this.MakeKitIsShown;
      this.MeDrawIsShown=false;
      this.MedicalTrackerIsShown =false;
      this.SparkyIsShown=false;
      this.CloudAPIIsShown=false;
      this.CityHuntIsShown=false;
      this.VRIsShown=false;
      this.SSIsShown=false;
      this.BloodMoonIsShown=false;
      this.EternalIsShown=false;
    }
    else if(project=="CityHunt"){
      this.CityHuntIsShown = !this.CityHuntIsShown;
      this.MeDrawIsShown=false;
      this.MedicalTrackerIsShown =false;
      this.SparkyIsShown=false;
      this.CloudAPIIsShown=false;
      this.MakeKitIsShown=false;
      this.VRIsShown=false;
      this.SSIsShown=false;
      this.BloodMoonIsShown=false;
      this.EternalIsShown=false;
    }else if(project=="VR"){
      this.VRIsShown = !this.VRIsShown;
      this.MeDrawIsShown=false;
      this.MedicalTrackerIsShown =false;
      this.SparkyIsShown=false;
      this.CloudAPIIsShown=false;
      this.CityHuntIsShown=false;
      this.MakeKitIsShown=false;
      this.SSIsShown=false;
      this.BloodMoonIsShown=false;
      this.EternalIsShown=false;
    }else if(project=="SS"){
      this.SSIsShown = !this.SSIsShown;
      this.MeDrawIsShown=false;
      this.MedicalTrackerIsShown =false;
      this.SparkyIsShown=false;
      this.CloudAPIIsShown=false;
      this.CityHuntIsShown=false;
      this.VRIsShown=false;
      this.MakeKitIsShown=false;
      this.BloodMoonIsShown=false;
      this.EternalIsShown=false;
    }else if(project=="BloodMoon"){
      this.BloodMoonIsShown = !this.BloodMoonIsShown;
      this.MeDrawIsShown=false;
      this.MedicalTrackerIsShown =false;
      this.SparkyIsShown=false;
      this.CloudAPIIsShown=false;
      this.CityHuntIsShown=false;
      this.VRIsShown=false;
      this.SSIsShown=false;
      this.MakeKitIsShown=false;
      this.EternalIsShown=false;
    }else if(project=="Eternal"){
      this.EternalIsShown = !this.EternalIsShown;
      this.MeDrawIsShown=false;
      this.MedicalTrackerIsShown =false;
      this.SparkyIsShown=false;
      this.CloudAPIIsShown=false;
      this.CityHuntIsShown=false;
      this.VRIsShown=false;
      this.SSIsShown=false;
      this.BloodMoonIsShown=false;
      this.MakeKitIsShown=false;
    }

  }
  onMouse(idLink:String, idImage:String){
    
  }
  ngOnInit(): void {

   
  }

}
