import { Pays } from "./pays";
import { Utilisateur } from "./utilisateur";

export class Experience {
    idExperience!:number;
    recit!:string;
    date!:Date;
    dureeExperience!:number;
    depense!:number;
    approbation!:boolean;
    pays!:Pays;
    utilisateur!:Utilisateur;
}
