import CostItem from "./components/CostItem";

function App() {
  const costs = [
    {
      date: new Date("2022-06-30"),
      description: "fridge",
      amount: 999.99,
    },
    {
      date: new Date("2023-04-03"),
      description: "t-short",
      amount: 3,
    },
    {
      date: new Date("2023-04-19"),
      description: "phone",
      amount: 100,
    },
  ];
  return (
    <div>
      <h1>Hello World!</h1>
      <CostItem
        date={costs[0].date}
        description={costs[0].description}
        amount={costs[0].amount}
      ></CostItem>
      <CostItem
        date={costs[1].date}
        description={costs[1].description}
        amount={costs[1].amount}
      ></CostItem>
      <CostItem
        date={costs[2].date}
        description={costs[2].description}
        amount={costs[2].amount}
      ></CostItem>
    </div>
  );
}

export default App;
