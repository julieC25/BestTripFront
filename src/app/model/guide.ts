import { Pays } from "./pays";

export class Guide {
    idGuide!:number;
    titre!:string;
    approbation!:boolean;
    type!:string;
    fichierPdf!:File;
    pays!:Pays;
}
