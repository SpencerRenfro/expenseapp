import React, {useState, useRef} from 'react'

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem (props) {

    const [title, setTitle] = useState(props.title);
    const inputRef = useRef(null);


    function handleClick() {
        if(inputRef.current.value) {
            setTitle(inputRef.current.value);
        }
        // setTitle(inputRef.current.value);
    }


    // get value of input field

    // const handleChange = event => {
    //     setTitle(event.target.value);
    //     console.log(setTitle);
    // }

    
        // arrow function
        
    // const clickHanlder2 = () => {
    //     console.log();
    // }
    
   
    

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <div>
            <button className="expense-change__title" onClick={handleClick}>Change Title</button>
            <input className="expense-change__button" type="text" ref={inputRef} ></input>
            </div>
           
        </Card>
    );
}

export default ExpenseItem;

