import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css"

const ExpensesList = (props) => {
    let expenseContent = props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))

      if(props.items.length === 0 ) {
          return <h2 className="expenses-list__fallback">No Expenses Found!</h2>
      }

      return (
          <ul className="expenses-list">
              {expenseContent}
          </ul>
      )
};

export default ExpensesList;