import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Experience } from 'src/app/model/experience';
import { Pays } from 'src/app/model/pays';
import { Ville } from 'src/app/model/ville';
import { ExperienceService } from 'src/app/services/experience.service';
import { PaysService } from 'src/app/services/pays.service';
import { PaysgeneriqueService } from 'src/app/services/paysgenerique.service';

@Component({
  selector: 'app-exp-partage',
  templateUrl: './exp-partage.component.html',
  styleUrls: ['./exp-partage.component.scss']
})
export class experiencePartageComponent implements OnInit {


  constructor(private appService: AppService, private paysgenerique:PaysgeneriqueService, 
    private experienceService: ExperienceService,private paysService:PaysService,
  ) { }
  
  experience : Experience = new Experience();
  experiences !: Experience[];
  payss !: Pays[];
  paysDuContinent !: any[];
  villes !: Ville[];

  selectedFiles?: FileList;
  imageSource!:any;
  currentFileUpload?: File;

 findAllPays(){
    this.paysService.findAll().subscribe(data=>{this.payss=data;
      this.paysDuContinent = [];
      let j = 0;
      for(let i = 0;i<this.payss.length;i++){
        if(this.payss[i].nomContinent == this.experience.pays.nomContinent){
          this.paysDuContinent[j] = this.payss[i];
          j++;
        }
      }
    })
  }

  saveExperience(){
    this.currentFileUpload = this.selectedFiles?.item(0) as File;
    this.experienceService.saveWithoutFile(this.experience).subscribe(data=>{
      this.experience = data;
      if(this.currentFileUpload.size < 500000){
        this.experienceService.saveExperienceFile(this.currentFileUpload,this.experience.idExperience).subscribe(
          ()=>{
            this.experience = new Experience();
            //this.experience.ville = this.paysgenerique.ville;
            this.selectedFiles = undefined;
            this.currentFileUpload = undefined;
          }
        )
        }
        else{
          alert("image trop volumineuse : " + this.currentFileUpload.size/1000 +"ko > 500ko")
        }
    });
  }

  ngOnInit(): void {
    //this.experience.ville = this.paysgenerique.ville;
    this.findAllPays();
  }

  saveWithFile(){
    this.experienceService.saveExperienceFile(this.experience.image, this.experience.idExperience).subscribe(()=>{
      this.experience = new Experience();
      //this.experience.pays = this.paysgenerique.ville;
    });
  }
  /*isAExperience(){
    return this.paysgenerique.experience. == 'experience';
  }*/

  selectFile(event:any){
    this.selectedFiles = event.target.files;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.imageSource = event.target.result;
      }
    }
  }
  isImageSelected(){
    return this.selectedFiles == undefined;
  }
}


