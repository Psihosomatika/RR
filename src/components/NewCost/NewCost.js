import CostForm from "./CostForm";
import React, { useState } from "react";
import "./NewCost.css";

const NewCost = (props) => {
  const [formActive, setFormActive] = useState(false);

  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    props.onAddCost(costData);
  };
  const activeFormHandler = () => {
    setFormActive(!formActive);
  };
  const onFormActivityChangesHandler = () => {
    setFormActive(false);
  };

  let formActiveVew = (
    <button onClick={activeFormHandler}>Добавить новый расход</button>
  );
  if (formActive) {
    formActiveVew = (
      <CostForm
        onSaveCostData={saveCostDataHandler}
        onClickingCancelButton={onFormActivityChangesHandler}
      />
    );
  }
  return <div className="new-cost">{formActiveVew}</div>;
};
export default NewCost;
