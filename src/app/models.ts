export class Equipe {
    id: number;
    name: string;
    country: string;
    constructor(id: number, name: string, country: string) {
        this.id = id;
        this.name = name;
        this.country = country;
    }
}

export class Joueur {
    id: number;
    idEquipe: number;
    nom: string;
    numero: number;
    poste: string;
}