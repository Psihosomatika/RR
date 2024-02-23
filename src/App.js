import React, { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2022, 6, 30),
    description: "fridge",
    amount: 999.99,
  },
  {
    id: "c2",
    date: new Date(2023, 4, 3),
    description: "t-short",
    amount: 3,
  },
  {
    id: "c3",
    date: new Date(2023, 4, 19),
    description: "phone",
    amount: 100,
  },
];
const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS);
  const addCostHandler = (cost) => {
    //! не правильное setCosts([cost, ...costs]); что бы обновлять состояние в завсисмости от предыдущего состояния, надо использовать
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };
  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
