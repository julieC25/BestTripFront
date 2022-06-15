import { Hotel } from "./hotel";
import { Monument } from "./monument";
import { Musee } from "./musee";
import { Restaurant } from "./restaurant";
import { Ville } from "./ville";

export class Lieu {
    idLieu!:number;
	nom!:string
    localisation!:string;
	nbVisiteurs!:string;
    ville!:Ville;
    /*monument!: Monument;
    musee!: Musee;
    restaurant!: Restaurant;
    hotel!: Hotel;*/


}
