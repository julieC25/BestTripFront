import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { Statistique } from 'src/app/model/statistique';
import { avisService } from 'src/app/services/avis.service';
import { ExperienceService } from 'src/app/services/experience.service';
import { GuideService } from 'src/app/services/guide.service';
import { NewsletterService } from 'src/app/services/newsletter.service';
import { StatistiqueService } from 'src/app/services/statistique.service';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartVoyage
} from "../../variables/charts";
@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.scss']
})
export class StatistiqueComponent implements OnInit {

  public datasetsX: any;
  public datasetsY: any;
  public dataX: any;
  public dataY: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;

  nbGuide:number=0;
  nbExperience:number=0;
  nbNewsletter:number=0;
  nbAvis:number=0;

  voyageParMois!:any;


  constructor(private statistiqueService:StatistiqueService,private httpClient:HttpClient,
              private avisService:avisService,private experienceService:ExperienceService,
              private guideService:GuideService,private newsletterService :NewsletterService ){}

  statistiques!:Statistique[];

  ngOnInit() {
    this.findAll();

    this.datasetsX = [
      ['JAN', 'FEV', 'MAR', 'AVR', 'MAI', 'JUIN', 'JUIL', 'AOUT', 'SEPT','OCT','NOV','DEC'],
    ];
    this.datasetsY = [
      [0,0,0,0,0,0,0,0,0,0,0,0],
    ];
    this.dataX = this.datasetsX[0];
    this.dataY = this.datasetsY[0]

    parseOptions(Chart, chartOptions());


    var chartSales = document.getElementById('chart-sales');

    this.salesChart = new Chart(chartSales, {
			type: 'line',
			options: chartVoyage.options,
			data: chartVoyage.data
		});
    this.countByMonth();
    this.updateNumbers();
  }


  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.voyageParMois;
    this.salesChart.data.labels = this.dataX;
    this.salesChart.data.datasets[0].label='Voyage';
    this.salesChart.update();
  }

  findAll(){
    this.statistiqueService.findAll().subscribe(data =>{this.statistiques=data;});
  }

  updateNumbers(){
    this.avisService.findAll().subscribe(data=>{this.nbAvis = data.length;});
    this.guideService.findAll().subscribe(data=>{this.nbGuide = data.length;});
    this.newsletterService.findAll().subscribe(data=>{this.nbNewsletter = data.length;});
    this.experienceService.findAll().subscribe(data=>{this.nbExperience = data.length;});
  }

  countByMonth(){
    this.experienceService.countByMonth().subscribe(data=>{this.voyageParMois=data;this.updateOptions();});
  }

}
