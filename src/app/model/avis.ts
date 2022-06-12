import { Lieu } from "./lieu";
import { Pays } from "./pays";
import { Ville } from "./ville";
import { Utilisateur } from "./utilisateur";

export class Avis {
    idAvis!: number;
    titre!: String;
	note!: number;
	recommandation!: String;
}
