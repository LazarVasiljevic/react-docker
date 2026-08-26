export type Difficulty = 'lako' | 'srednje' | 'tesko';
export type TrailType = 'loop' | 'point-to-point';
export type TrailKind = 'setnja' | 'biciklizam';
export type Location = 'Beljanica' | 'Tara' | 'Jastebac' | 'Stara planina' | 'Divčibare' | 'Valjevo' | 'Beograd'
    | 'Goč' | 'Kopaonik' | 'Fruška gora' | 'Besna kobila';


    
export class Trail {
    public id: string;
    public name: string;
    public location: Location;
    public typeK: TrailKind;
    public difficulty: Difficulty;
    public duration: number;
    public distance: number;
    public elevation: number;
    public description: string;
    public image: string;
    public tipStaze: TrailType;

    constructor(
        id: string,
        name: string,
        location: Location,
        typeK: TrailKind,
        difficulty: Difficulty,
        duration: number,
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