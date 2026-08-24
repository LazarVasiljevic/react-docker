export class User {
    public name: string;
    public surname: string;
    public email: string;
    public password: string;
    public favorites: number[];

    constructor(
        name: string,
        surname: string,
        email: string,
        password: string,
        favorites: number[]
    ){
        this.name=name;
        this.surname=surname;
        this.email=email;
        this.password=password;
        this.favorites=favorites;
    }

    addFavorite(trailId: number): void {
        if (!this.favorites.includes(trailId)) {
            this.favorites.push(trailId);
        }
    }

    removeFavorite(trailId: number): void {
        this.favorites = this.favorites.filter(
            id => id !== trailId
        );
    }

    hasFavorite(trailId: number): boolean {
        return this.favorites.includes(trailId);
    }
}
