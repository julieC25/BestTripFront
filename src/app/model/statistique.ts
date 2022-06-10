import { PointStatistique } from "./point-statistique";
import { Utilisateur } from "./utilisateur";

export class Statistique {
    idStatistique!:number;
    titre!: string;
    nomAxeX!:string;
    nomAxeY!:string;
    valeurs!:PointStatistique[];
    utilisateur!:Utilisateur;

}
