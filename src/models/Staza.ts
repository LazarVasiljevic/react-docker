export type Difficulty = 'laka' | 'srednje' | 'teška';
export type TrailType = 'kružna' | 'od tačke do tačke';
export type TrailKind = 'setnja' | 'biciklizam';
export type Location = 'Beljanica' | 'Tara' | 'Jastrebac' | 'Stara planina' | 'Divčibare' | 'Valjevo' | 'Beograd'
    | 'Goč' | 'Kopaonik' | 'Fruška gora' | 'Besna kobila';


    
export class Trail {
    public id: number;
    public name: string;
    public location: Location;
    public typeK: TrailKind;
    public difficulty: Difficulty;
    public duration: string;
    public distance: number;
    public elevation: number;
    public description: string;
    public image: string;
    public tipStaze: TrailType;

    constructor(
        id: number,
        name: string,
        location: Location,
        typeK: TrailKind,
        difficulty: Difficulty,
        duration: string,
        distance: number,
        elevation: number,
        description: string,
        image: string,
        tipStaze: TrailType
    ) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.typeK = typeK;
        this.difficulty = difficulty;
        this.duration = duration;
        this.distance = distance;
        this.elevation = elevation;
        this.description = description;
        this.image = image;
        this.tipStaze = tipStaze;
    }

    getDistanceLabel(): string {
        return `${this.distance} km`;
    }

    getDifficultyLabel(): string {
        return this.difficulty;
    }
}