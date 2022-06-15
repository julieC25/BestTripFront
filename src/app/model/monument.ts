import { Lieu } from "./lieu";
import { Ville } from "./ville";

export class Monument extends Lieu {
    description!:string;
	dateConstruction!:Date;
	horaires!:string;
	ville!: Ville;
}
