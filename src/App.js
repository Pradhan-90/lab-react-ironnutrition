// src/App.js
import './App.css';
import foodsFromJson from './foods.json';
import { useState } from 'react';
import FoodBox from './component/FoodBox';

function App() {
  const [foods, setFoods] = useState(foodsFromJson);
  const [food, setFood] = useState({});
  return (
    <div>
      <h2>Food List</h2>

      <FoodBox
        calories={food.calories}
        name={food.name}
        image={food.image}
        servings={food.servings}
      />

      {foods.map((food) => {
        return (
          <div
            className="Item"
            onClick={() => {
              setFood(food);
            }}
          >
            <p> {food.name} </p>
            <img src={food.image} width={100} />
          </div>
        );
      })}
    </div>
  );
}
export default App;
