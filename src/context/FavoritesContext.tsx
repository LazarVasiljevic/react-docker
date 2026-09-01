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
        
        localStorage.setItem(
            "user",
            JSON.stringify(updatedUser)
        );

        setUser(updatedUser);

        setFavoriteIds([
            ...updatedUser.favorites
        ]);

    };


    const addFavorite = (trailId: number) => {

        const storedUser =
            localStorage.getItem("loggedUser");

        if (!storedUser) {
            return;
        }


        const userData =
            JSON.parse(storedUser);


        const loggedUser = new User(
            userData.name,
            userData.surname,
            userData.email,
            userData.password,
            userData.favorites || []
        );


        loggedUser.addFavorite(trailId);


        saveUser(loggedUser);
    };


    const removeFavorite = (trailId: number) => {

        const storedUser =
            localStorage.getItem("loggedUser");

        if (!storedUser) {
            return;
        }


        const userData =
            JSON.parse(storedUser);


        const loggedUser = new User(
            userData.name,
            userData.surname,
            userData.email,
            userData.password,
            userData.favorites || []
        );


        loggedUser.removeFavorite(trailId);


        saveUser(loggedUser);
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