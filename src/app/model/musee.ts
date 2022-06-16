import { Lieu } from "./lieu";
import { Ville } from "./ville";

export class Musee  extends Lieu{
    entree!:number;
	accesHandicapes!:boolean;
	guideAudio!:boolean;
	style!:string;
	horaires!:string;
	ville!: Ville;
	lieu!: any;
}
