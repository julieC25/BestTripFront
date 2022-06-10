import { Lieu } from "./lieu";

export class Ville {
    idVille!:number;
    nomVille!:string;
    modaliteTransport!:string;
    nbHabitants!:number;
    lieux!:Lieu[];
    avis!:Avis[];

}
