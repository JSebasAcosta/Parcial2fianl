import React, { useState, useEffect } from "react";
import { useAppContext } from "../../AppContext";
import SearchIcon from "./searchIcon";
import "./index.css";

const SearchBox = () => {
  const { setMeals, searchMealByName } = useAppContext();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Configura un intervalo para realizar la búsqueda cada 1 segundo
    const searchInterval = setInterval(() => {
      performSearch(searchTerm);
    }, 300);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(searchInterval);
  }, [searchTerm]);

  const handleInputChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
  };

  const performSearch = async (term) => {
    try {
      const data = await searchMealByName(term);
      setMeals(data || []);
    } catch (error) {
      console.error("Error al buscar comidas:", error);
    }
  };

  return (
    <div className="search-box">
      <SearchIcon />
      <input
        type="text"
        placeholder="Busca en este sitio web"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBox;
