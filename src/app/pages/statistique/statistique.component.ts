import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { Statistique } from 'src/app/model/statistique';
import { Utilisateur } from 'src/app/model/utilisateur';
import { avisService } from 'src/app/services/avis.service';
import { ExperienceService } from 'src/app/services/experience.service';
import { GuideService } from 'src/app/services/guide.service';
import { NewsletterService } from 'src/app/services/newsletter.service';
import { StatistiqueService } from 'src/app/services/statistique.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

// core components
import {
  chartOptions,
  parseOptions,
  chartVoyage,
  chartConnexion
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
  public dataConnexionX:any;
  public dataConnexionY:any;
  public voyageChart;
  public connexionChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;

  nbGuide:number=0;
  nbExperience:number=0;
  nbNewsletter:number=0;
  nbAvis:number=0;

  voyageParMois!:any;
  utilisateurUsernames!:any;
  utilisateurConnexions!:any;


  constructor(private statistiqueService:StatistiqueService,private httpClient:HttpClient,
              private avisService:avisService,private experienceService:ExperienceService,
              private guideService:GuideService,private newsletterService :NewsletterService,
              private utilisateurService:UtilisateurService ){}

  statistiques!:Statistique[];
  utilisateurs!:Utilisateur[];
  nbConnexionTotal:number = 0;
  ngOnInit() {
    this.findAll();

    this.datasetsX = [
      ['JAN', 'FEV', 'MAR', 'AVR', 'MAI', 'JUIN', 'JUIL', 'AOUT', 'SEPT','OCT','NOV','DEC'],
      ['florianb'],
    ];
    this.datasetsY = [
      [0,0,0,0,0,0,0,0,0,0,0,0],
      [0],
    ];
    this.dataX = this.datasetsX[0];
    this.dataY = this.datasetsY[0];
    this.dataConnexionX = this.datasetsX[1];
    this.dataConnexionY = this.datasetsY[1];

    parseOptions(Chart, chartOptions());


    var chartVoyageHTML = document.getElementById('chart-voyage');
    var chartConnexionHTML = document.getElementById('chart-connexion');

    this.voyageChart = new Chart(chartVoyageHTML, {
			type: 'line',
			options: chartVoyage.options,
			data: chartVoyage.data
		});
    this.connexionChart = new Chart(chartConnexionHTML, {
			type: 'bar',
			options: chartConnexion.options,
			data: chartConnexion.data
		});
    this.countByMonth();
    this.updateNumbers();
  }
  calculerNbConnexionTotal(){
    this.nbConnexionTotal = 0;
    for(let i=0;i<this.utilisateurs.length;i++){
      this.nbConnexionTotal += this.utilisateurs[i].nbConnexion;
    }
  }

  findAllUtilisateurs(){
    this.utilisateurService.findAll().subscribe(data=>{this.utilisateurs = data;
      this.calculerNbConnexionTotal();
      this.generateUtilisateurConnexionData();
    });
  }
  public updateOptions() {
    this.voyageChart.data.datasets[0].data = this.voyageParMois;
    this.voyageChart.data.labels = this.dataX;
    this.voyageChart.data.datasets[0].label='Voyage';
    this.connexionChart.data.datasets[0].data = this.utilisateurConnexions;
    this.connexionChart.data.labels = this.utilisateurUsernames;
    this.connexionChart.data.datasets[0].label='Connexion';
    this.voyageChart.update();
    this.connexionChart.update();
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
    this.experienceService.countByMonth().subscribe(data=>{this.voyageParMois=data;this.findAllUtilisateurs();});
  }
  generateUtilisateurConnexionData(){
    this.utilisateurUsernames = [];
    this.utilisateurConnexions = [];
    for(let i=0;i<this.utilisateurs.length;i++){
      this.utilisateurUsernames[i] = this.utilisateurs[i].username;
      this.utilisateurConnexions[i] = this.utilisateurs[i].nbConnexion;
    }
    this.updateOptions();
  }

}
