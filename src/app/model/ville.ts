import { Lieu } from "./lieu";
import {Avis} from "./avis";

export class Ville {
    idVille!:number;
    nomVille!:string;
    modaliteTransport!:string;
    nbHabitants!:number;
    lieux!:Lieu[];
    avis!:Avis[];

}
