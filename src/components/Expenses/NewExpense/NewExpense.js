import React, { useState } from "react";

import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    const showButton = () => {
        setIsEditing(true);
    }

    const hideButton = () => {
        setIsEditing(false);
    }

    return  <div className="new-expense">
                {!isEditing && <button onClick={showButton}>Add New Expense</button>}
                {isEditing && <ExpenseForm onCancel={hideButton} onSaveExpenseData = {saveExpenseDataHandler} />}
            </div>
}

export default NewExpense;