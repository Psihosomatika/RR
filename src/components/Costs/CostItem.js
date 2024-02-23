import "./CostItem.css";
import CostDate from "./CostDate";
import Card from "../UI/Card";

const CostItem = (props) => {
  // console.log(props);
  return (
    <li>
      <Card className="cost-item">
        <CostDate date={props.date} />
        <div className="cost-item__description">
          <h2>{props.description}</h2>
          <p className="cost-item__price">${props.amount}</p>
        </div>
      </Card>
    </li>
  );
};

export default CostItem;
