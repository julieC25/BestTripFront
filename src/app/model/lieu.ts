import { Hotel } from "./hotel";
import { Monument } from "./monument";
import { Musee } from "./musee";
import { Restaurant } from "./restaurant";

export class Lieu {
    idLieu!:number;
	nom!:string
    localisation!:string;
	nbVisiteurs!:string;
    monument!: Monument;
    musee!: Musee;
    restaurant!: Restaurant;
    hotel!: Hotel;


}
