import React from 'react'
import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";
import {User} from '../models/User'

interface FavoriteType {

    favoriteIds: number[];

    addFavorite: (trailId: number) => void;

    removeFavorite: (trailId: number) => void;

    hasFavorite: (trailId: number) => boolean;
}

const FavoriteContext = createContext<FavoriteType | undefined>(undefined);

interface FavoritesProviderProps {
    children: React.ReactNode;
}

export function FavoritesProvider({children}: FavoritesProviderProps) {

    const [user, setUser] = useState<User | null>(null);

    const [favoriteIds, setFavoriteIds] =
        useState<number[]>([]);

    useEffect(() => {

        const storedUser =
            localStorage.getItem("loggedUser");


        if (!storedUser) {

            setUser(null);
            setFavoriteIds([]);

            return;
        }


        const userData = JSON.parse(storedUser);

        console.log("Ulogovani---",userData)
        const loggedUser = new User(
            userData.ime,
            userData.prezime,
            userData.email,
            userData.password,
            userData.favorites || []
        );


        setUser(loggedUser);

        setFavoriteIds([
            ...loggedUser.favorites
        ]);

    }, []);




    const saveUser = (updatedUser: User) => {

        localStorage.setItem(
            "loggedUser",
            JSON.stringify(updatedUser)
        );


        setUser(updatedUser);

        setFavoriteIds([
            ...updatedUser.favorites
        ]);
    };


    const addFavorite = (trailId: number) => {

        if (!user) {
            return;
        }


        user.addFavorite(trailId);


        saveUser(user);
    };


    const removeFavorite = (trailId: number) => {

        if (!user) {
            return;
        }


        user.removeFavorite(trailId);


        saveUser(user);
    };


    const hasFavorite = (trailId: number): boolean => {

        if (!user) {
            return false;
        }


        return user.hasFavorite(trailId);
    };


    return (

        <FavoriteContext.Provider
            value={{
                favoriteIds,
                addFavorite,
                removeFavorite,
                hasFavorite
            }}
        >
            {children}
        </FavoriteContext.Provider>
    );
}


export function useFavorites() {

    const context =
        useContext(FavoriteContext);


    if (!context) {

        throw new Error(
            "useFavorites mora biti korišćen unutar FavoritesProvider-a"
        );

    }


    return context;
}