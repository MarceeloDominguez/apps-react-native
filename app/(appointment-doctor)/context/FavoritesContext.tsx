import React, { createContext, useContext, useEffect, useState } from "react";
import { Doctor } from "../data/data";
import AsyncStorage from "@react-native-async-storage/async-storage";

type FavoritesContextType = {
  favorites: Doctor[];
  addFavorite: (doctor: Doctor) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

const FAVORITES_STORAGE_KEY = "favorites";

export const FavoritesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favorites, setFavorites] = useState<Doctor[]>([]);

  // Load favorites from AsyncStorage on startup
  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const storedFavorites = await AsyncStorage.getItem(
          FAVORITES_STORAGE_KEY
        );
        if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites));
        }
      } catch (error) {
        console.log("Error loading favorites from storage", error);
      }
    };

    loadFavorites();
  }, []);

  // Save favorites to AsyncStorage
  useEffect(() => {
    const saveFavorites = async () => {
      try {
        await AsyncStorage.setItem(
          FAVORITES_STORAGE_KEY,
          JSON.stringify(favorites)
        );
      } catch (error) {
        console.log("Error saving favorites to storage", error);
      }
    };

    saveFavorites();
  }, [favorites]);

  const addFavorite = (doctor: Doctor) => {
    setFavorites((prev) => [...prev, doctor]);
  };

  const removeFavorite = (id: number) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  const isFavorite = (id: number) => {
    return favorites.some((item) => item.id === id);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }

  return context;
};
