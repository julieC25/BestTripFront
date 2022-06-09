export class Utilisateur {
    idUtilisateur!:number;
    nom!:string;
    prenom!:string;
    username!:string;
    password!:string;
    email!:string;
    abonnementNewsletter!:boolean;
    enabled!:boolean;
    guides!:Guide[];
    imageProfil!:File;
    statistiques!:Statistique[];
    avisListe!:Avis[];
    roles!:Role[];
    newsletter!:Newsletter[];
    experiences!:Experience[];
}
