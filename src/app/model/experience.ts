import { Pays } from "./pays";
import { Utilisateur } from "./utilisateur";

export class Experience {
    idExperience!:number;
    recit!:string;
    date!:Date;
    dureeExperience!:number;
    depense!:number;
    approbation!:boolean;
    image!:File;
    pays!:Pays;
    utilisateur!:Utilisateur;
}
