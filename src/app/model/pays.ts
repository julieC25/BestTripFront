import { Avis } from "./avis";
import { Experience } from "./experience";
import { Guide } from "./guide";
import { Ville } from "./ville";

export class Pays {
    idPays!:number;
    nomContinent!:string;
    nomPays!:string;
    securite!:string;
    langue!:string;
    surface!:number;
    conduiteSens!:boolean;
    visa!:string;
    numeroUtile!:string;
    guides!:Guide[];
    experiences!:Experience[];
    villes!:Ville[];
    avis!:Avis[];
}
