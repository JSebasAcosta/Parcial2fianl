import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../../AppContext';

function MealDetail() {
  const { meals } = useAppContext();
  const { id } = useParams(); // Obtiene el parámetro de la URL

  // Busca la comida por su ID
  const meal = meals.find((meal) => meal.idMeal === id);

  if (!meal) {
    return <div>Comida no encontrada</div>;
  }

  return (
    <div className="meal-detail">
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <p>Texto de relleno o información adicional sobre la comida</p>
    </div>
  );
}

export default MealDetail;
