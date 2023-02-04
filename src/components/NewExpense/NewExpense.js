import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense = (props) => {


    let itemCount = props.itemCount;

    

    const saveExpenseData = (enteredExpenseData) => {

        itemCount = itemCount +1;
        const expenseData = {
            ...enteredExpenseData,
            id: itemCount
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData);
    };
    
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseData} />
        </div>
    );
};

export default NewExpense;