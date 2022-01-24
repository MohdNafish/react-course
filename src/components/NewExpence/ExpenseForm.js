import React, { useState } from "react";
// import { useState } from "react/cjs/react.development";

import './ExpenseForm.css';

const ExpenseForm = () => {
    // const [enterdTitle, setEnterdTitle] = useState('');
    // const [enterdAmout, setEnterdAmount] = useState('');
    // const [enterdDate, setEnterdDate] = useState('');

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const titleChangeHandler = (event) => {
        // setEnterdTitle(event.target.value);
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value,
        })
    }
    const amountChangeHandler = (event) => {
        // setEnterdAmount(event.target.value);
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value,
        })
    }
    const dateChangeHandler = (event) => {
        // setEnterdDate(event.target.value);
        setUserInput({
            ...userInput,
            enteredDate: event.target.value,
        })
    }

    return(
        <form>
            <div className="new-expense__controls">
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} />
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;