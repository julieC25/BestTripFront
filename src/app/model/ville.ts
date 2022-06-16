import { Lieu } from "./lieu";
import {Avis} from "./avis";
import { Pays } from "./pays";

export class Ville {
    idVille!:number;
    nomVille!:string;
    modaliteTransport!:string;
    nbHabitants!:number;
    lieux!:Lieu[];
    avis!:Avis[];
    pays!:Pays;
}
