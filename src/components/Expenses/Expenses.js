import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./NewExpense/ExpensesFilter";
import ExpensesChart from "./NewExpense/ExpensesChart";

function Expenses(props) {
  const [dropDownValue, setDropDownValue] = useState("2019");

  const DropDownChangeHandler = (dropValue) => {
    console.log(dropValue);
    setDropDownValue(dropValue);
  };

  const filteredYear = props.item.filter(expense => {
    return expense.date.getFullYear().toString() === dropDownValue;
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultValue={dropDownValue}
          onChangeValue={DropDownChangeHandler}
        />
        <ExpensesChart expenses={filteredYear}/>
        <ExpensesList items = {filteredYear}/>
      </Card>
    </div>
  );
}

export default Expenses;
