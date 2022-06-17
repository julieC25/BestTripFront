import { Component, OnInit } from '@angular/core';
import { Guide } from 'src/app/model/guide';
import { Pays } from 'src/app/model/pays';
import { GuideService } from 'src/app/services/guide.service';

@Component({
  selector: 'app-guide-oceanie',
  templateUrl: './guide-oceanie.component.html',
  styleUrls: ['./guide-oceanie.component.scss']
})
export class GuideOceanieComponent implements OnInit {

   constructor() { }

  ngOnInit(): void {
  }

}
