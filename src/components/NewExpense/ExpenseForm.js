import React, { useState } from 'react'


import './ExpenseForm.css'

const ExpenseForm = (props) => {

    // individual state example

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, SetEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        SetEnteredDate(event.target.value);
    };





    // grouped state example
// ----------------------------------------------------------------------------------------------------------------------------------------------------------

//    const [userInput, SetUserInput] = useState({
//         enteredTitle: '',
//         enteredAmount: '',
//         enteredDate: ''
//     });

//     const titleChangeHandler = (event) => {
//         SetUserInput({
//             ...userInput,
//             enteredTitle: event.target.value,
            
//         })
//     }

    // const amountChangeHandler = (event) => {

        // the way to do it if the code depends on the previous state (this code does)

        // SetUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });


    //     SetUserInput((prevState) => {
    //         return {...prevState, enteredTitle: event.target.value};
    //     });
    // };

    // const dateChangeHandler = (event) => {
    //     SetUserInput({
    //         ...userInput,
    //         enteredDate: event.target.value,
    //     });
    // };

    // ----------------------------------------------------------------------------------------------------------------------------------------------------------


    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData ={
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        // dont need to do this object if doing the combined state method: but missing the new Date(enteredDate)

        props.onSaveExpenseData(expenseData);
       

        setEnteredTitle('');
        setEnteredAmount('');
        SetEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text"
                     value={enteredTitle} 
                     onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number"
                     value={enteredAmount} 
                     min="0.01" step="0.01"
                      onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date"
                    value={enteredDate}
                     min="2019-01-01" max="2022-12-31" 
                     onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;