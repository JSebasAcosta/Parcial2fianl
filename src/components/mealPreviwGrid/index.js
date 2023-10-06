import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import './index.css';
import { useAppContext } from '../../AppContext';

const MealPreviwGrid = () => {
  const { meals } = useAppContext();

  return (
    <div className="meal-grid">
      {meals.map((meal) => (
        <Link key={meal.idMeal} to={`/meal/${meal.idMeal}`}>
          <div className="meal-item">
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h3>{meal.strMeal}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MealPreviwGrid;
