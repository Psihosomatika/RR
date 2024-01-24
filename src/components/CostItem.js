import "./CostItem.css";
function CostItem(props) {
  const month = props.date.getMonth();
  const day = props.date.getDate();
  const year = props.date.getFullYear();
  console.log(month);
  return (
    <div className="cost-item">
      <div>
        <p>{month}</p>
        <p>{day}</p>
        <p>{year}</p>
      </div>
      <div className="cost-item__description">
        <h2>{props.description}</h2>
        <p className="cost-item__price">${props.amount}</p>
      </div>
    </div>
  );
}

export default CostItem;
