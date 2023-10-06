import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

// Agrega la función SearchMealByName al contexto
export const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);

  // ...

  const searchMealByName = async (name) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
      );
      const data = await response.json();
      return data.meals || [];
    } catch (error) {
      console.error('Error al buscar comidas:', error);
      return [];
    }
  };

  // Resto de tu código...

  return (
    <AppContext.Provider value={{ meals, setMeals, searchMealByName }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
