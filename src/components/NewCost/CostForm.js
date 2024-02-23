import React, { useState } from "react";
import "./CostForm.css";
const CostForm = (props) => {
  const [nameInput, setInputName] = useState("");
  const [amountInput, setInputAmount] = useState("");
  const [dateInput, setInputDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   name: "",
  //   amount: "",
  //   date: "",
  // });

  const nameChangeHandler = (e) => {
    setInputName(e.target.value);
    //!так как написано ниже не работает, потому что реакт обновляет состяния с задержкой.
    // setUserInput({
    //   ...userInput,
    //   name: e.target.value,
    // });
    //!правильнее писать так
    // setUserInput((previousState) => {
    //   return {
    //     ...previousState,
    //     name: e.target.value,
    //   };
    // });
  };
  const amountChangeHandler = (e) => {
    setInputAmount(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   amount: e.target.value,
    // });
  };
  const dateChangeHandler = (e) => {
    setInputDate(new Date(e.target.value).toISOString().split("T")[0]);
    // setUserInput({
    //   ...userInput,
    //   date: e.target.value,
    // });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const costData = {
      description: nameInput,
      amount: amountInput,
      date: new Date(dateInput),
    };
    props.onSaveCostData(costData);
    setInputName("");
    setInputAmount("");
    setInputDate("");
  };

  const cancellationHandler = (e) => {
    props.onClickingCancelButton();
  };

  return (
    <form className="new-cost__controls" onSubmit={submitHandler}>
      <div className="new-cost__control">
        <label>Название</label>
        <input type="text" onChange={nameChangeHandler} value={nameInput} />
      </div>
      <div className="new-cost__control">
        <label>Сумма</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          onChange={amountChangeHandler}
          value={amountInput}
        />
      </div>
      <div className="new-cost__control">
        <label>Дата</label>
        <input
          type="date"
          min="2019-01-01"
          step="2024-12-31"
          onChange={dateChangeHandler}
          value={dateInput}
        />
      </div>
      <div className="new-cost__actions">
        <button type="submit">Добавить расход</button>
        <button onClick={cancellationHandler}>Отмена</button>
      </div>
    </form>
  );
};

export default CostForm;
