import React from 'react';
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import './Expenses.scss'

const Expenses = ({ expenses }) => {
    return (
        <div className="expenses">
            {expenses.map(expense => (
                <ExpenseItem expense={expense} />
            ))}
        </div>
    );
}

export default Expenses;
