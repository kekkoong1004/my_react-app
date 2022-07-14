import './NewExpense.scss';
import './ExpenseForm';
import ExpenseForm from './ExpenseForm';

function NewExpense (props) {
    const expenseSubmitHandler = (expenseData) => {
        expenseData.id = (Math.random()*10).toString()
        props.onNewExpenseCreated(expenseData)
    }


    return (
        <div className="new-expense">
            <ExpenseForm onExpenseSubmit={expenseSubmitHandler}/>
        </div>
    )
}

export default NewExpense;