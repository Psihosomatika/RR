import "./CostList.css";
import CostItem from "./CostItem";
const CostList = (props) => {
  //можно это же сделать при помощи тернаргного оператора
  //filteredCosts.length === 0 ? <p>В этом году не было расходов</p> : filteredCosts.map((cost) => (
  //   <CostItem
  //     key={cost.id}
  //     date={cost.date}
  //     description={cost.description}
  //     amount={cost.amount}
  //   />
  // ));

  //а можно хитро, при помощи &&
  // {filteredCosts.length === 0 && <p>В этом году не было расходов</p>}
  // {filteredCosts.length > 0 && filteredCosts.map((cost) => (
  //   <CostItem
  //     key={cost.id}
  //     date={cost.date}
  //     description={cost.description}
  //     amount={cost.amount}
  //   />
  // ));}
  if (props.costs.length === 0) {
    return <h2 className="cost-list__fallback">В этом году расходов нет</h2>;
  } else {
    return (
      <ul className="cost-list">
        {" "}
        {props.costs.map((cost) => (
          <CostItem
            key={cost.id}
            date={cost.date}
            description={cost.description}
            amount={cost.amount}
          />
        ))}
      </ul>
    );
  }
};

export default CostList;
