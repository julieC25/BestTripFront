import { Lieu } from "./lieu";
import { Ville } from "./ville";

export class Restaurant extends Lieu {
    nbEtoiles!:number;
    accesHandicapes!:boolean;
    specialite!:string;
    ville!: Ville;
    carte!:File;
    lieu!: any;
}
