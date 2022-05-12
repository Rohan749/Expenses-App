import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 67.5,
    date: new Date(2022, 4, 12)
  },
  {
    id: "e2",
    title: "Amul Butter",
    amount: 30.5,
    date: new Date(2022, 9, 12)
  },
  {
    id: "e3",
    title: "Biscuits",
    amount: 89.4,
    date: new Date(2021, 6, 12)
  },
  {
    id: "e4",
    title: "Steel Plates",
    amount: 10.5,
    date: new Date(2020, 7, 12)
  },
  {
    id: "e5",
    title: "Zomato",
    amount: 15.5,
    date: new Date(2020, 8, 12)
  },
  {
    id: "e6",
    title: "Uncle Chips",
    amount: 12.5,
    date: new Date(2020, 9, 12)
  },
  {
    id: "e7",
    title: "Pizza",
    amount: 55.5,
    date: new Date(2021, 1, 12)
  },
];

function App() {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpense)=>{
      return [expense, ...previousExpense];
    })
  }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses item = {expenses}/>
      
    </div>
  );
}

export default App;
