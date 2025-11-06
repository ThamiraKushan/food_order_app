import React, { useEffect, useState } from "react";
import Meal from "../Meal";
import { fetchMeals } from "../../Api/mealsApi";

function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);
  //   useEffect(() => {
  //     async function fetchMeals() {
  //       try {
  //         const response = await fetch("http://localhost:3000/meals");
  //         if (!response.ok) {
  //           //...
  //         }
  //         const resData = await response.json();
  //         setLoadedMeals(resData);
  //       } catch (error) {}
  //     }
  //     fetchMeals();
  //   }, []);

  useEffect(() => {
    async function loadMeals() {
      try {
        const meals = await fetchMeals();
        setLoadedMeals(meals);
      } catch (error) {
        console.error("Failed to fetch meals:", error);
      }
    }

    loadMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <Meal meal={meal} key={meal.id} />
      ))}
    </ul>
  );
}

export default Meals;
