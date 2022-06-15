import { Lieu } from "./lieu";
import { Ville } from "./ville";

export class Hotel extends Lieu{
    proprete!:number;
    nbEtoiles!:number;
    prixNuit!:number;
    ville!: Ville;
}
