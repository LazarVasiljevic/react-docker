export type Difficulty = 'lako' | 'srednje' | 'tesko';
export type TrailType = 'loop' | 'point-to-point';
export type TrailKind = 'setnja' | 'biciklizam';

export class Trail {
    public id: string;
    public name: string;
    public location: string;
    public typeK: TrailKind;
    public difficulty: Difficulty;
    public distance: number;
    public duration: number;
    public description: string;
    public image: string;
    public tipStaze: TrailType;

    constructor(
        id: string,
        name: string,
        location: string,
        typeK: TrailKind,
        difficulty: Difficulty,
        distance: number,
        duration: number,
        description: string,
        image: string,
        tipStaze: TrailType
    ) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.typeK = typeK;
        this.difficulty = difficulty;
        this.distance = distance;
        this.duration = duration;
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