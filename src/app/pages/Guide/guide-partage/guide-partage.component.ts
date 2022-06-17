import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Guide } from 'src/app/model/guide';
import { Pays } from 'src/app/model/pays';
import { Ville } from 'src/app/model/ville';
import { GuideService } from 'src/app/services/guide.service';
import { PaysService } from 'src/app/services/pays.service';
import { PaysgeneriqueService } from 'src/app/services/paysgenerique.service';

@Component({
  selector: 'app-guide-partage',
  templateUrl: './guide-partage.component.html',
  styleUrls: ['./guide-partage.component.scss']
})
export class GuidePartageComponent implements OnInit {

  constructor(private appService: AppService, private paysgenerique:PaysgeneriqueService, 
    private guideService: GuideService,private paysService:PaysService,
  ) { }
  
  guide : Guide = new Guide();
  guides !: Guide[];
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
        if(this.payss[i].nomContinent == this.guide.pays.nomContinent){
          this.paysDuContinent[j] = this.payss[i];
          j++;
        }
      }
    })
  }

  ngOnInit(): void {
    //this.guide.ville = this.paysgenerique.ville;
    this.findAllPays();
  }

  saveGuide(){
      this.currentFileUpload = this.selectedFiles?.item(0) as File;
      this.guideService.saveWithoutFile(this.guide).subscribe(data=>{
        this.guide = data;
        if(this.currentFileUpload.size < 500000){
          this.guideService.saveGuideFile(this.currentFileUpload,this.guide.idGuide).subscribe(
            ()=>{
              this.guide = new Guide();
              //this.guide.ville = this.paysgenerique.ville;
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
    
  /*isAGuide(){
    return this.paysgenerique.guide == 'guide';
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


