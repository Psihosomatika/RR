import "./Costs.css";
import React, { useState } from "react";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import CostList from "./CostList";
import CostsDiagram from "./CostsDiagram";

const Costs = (props) => {
  const [selectedYear, setselectedYear] = useState("2021");
  const costs = props.costs;

  const yearChangeHandler = (year) => {
    setselectedYear(year);
  };

  const filteredCosts = costs.filter(
    (cost) => cost.date.getFullYear().toString() === selectedYear
  );

  return (
    <Card className="costs">
      <CostsFilter onChangeYear={yearChangeHandler} year={selectedYear} />
      <CostsDiagram costs={filteredCosts} />
      <CostList costs={filteredCosts} />
    </Card>
  );
};

export default Costs;
