import React from 'react'
import './ExpenseItem.scss';
import ExpenseDate from '../ExpenseDate/ExpenseDate';

const ExpenseItem = ({ expense }) => {

    return (
        <section className="expense-item" key={expense.id}>

            <ExpenseDate expenseDate={expense.date} />

            <div className="expense-item__description">
                <h2>{expense.title}</h2>
                <div className="expense-item__price">
                    {expense.amount}
                </div>
            </div>
        </section>
    )
}

export default ExpenseItem
