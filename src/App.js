import React from "react";
import "./App.css";
import MealsSummary from "./Meals/MealsSummary";
import Header from "./UI/Header";
import AvailableMeals from "./Meals/AvailableMeals.js";

function App() {
  return (
    <React.Fragment>
      <Header />
      <MealsSummary />
      <AvailableMeals />
    </React.Fragment>
  );
}

export default App;
