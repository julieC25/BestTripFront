import { Statistique } from "./statistique"
import { Role } from "./role"
import {Avis} from "./avis"

export class Utilisateur {
    idUtilisateur!:number;
    nom!:string;
    prenom!:string;
    username!:string;
    password!:string;
    email!:string;
    abonnementNewsletter!:boolean;
    enabled!:boolean;
    //guides!:Guide[];
    imageProfil!:File;
    statistiques!:Statistique[];
    avisListe!:Avis[];
    roles!:Role[];
    //newsletters!:Newsletter[];
    //experiences!:Experience[];
}
