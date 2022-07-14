import { useState } from 'react';
import './ExpenseForm.scss';

function ExpenseForm (props) {
    const [date, setDate] = useState(new Date())
    const [item, setItem] = useState('')
    const [amount, setAmount] = useState('')

    const expenseDateHandler = (e) => {
        setDate(e.target.value)
    }

    const expenseItemHandler = (e) => {
        setItem(e.target.value)
    }

    const expenseAmountHandler = (e) => {
        setAmount(e.target.value)
    }

    const expenseSubmitHandler = (e) => {
        e.preventDefault()
        const expenseData = {
            date,
            item,
            amount
        }
    
    props.onExpenseSubmit(expenseData)


        setDate('')
        setItem('')
        setAmount('')
    }

    return (
        <form onSubmit={expenseSubmitHandler} className="new-expense__form">
            <div className="new-expense__form--group">
                <label for="date">Date</label>
                <input type="date" name="date" min="1900-01-01" max="2050-12-31"
                value={date}
                onChange={expenseDateHandler}/>
            </div>
            <div className="new-expense__form--group">
                <label for="item">Expense Item</label>
                <input type="text" name="item" maxlength="20" onChange={expenseItemHandler}
                value={item}/>
            </div>
            
            <div className="new-expense__form--group">
                <label for="amount">Amount</label>
                <input type="number" name="amount" min="0.10" step="0.10" 
                onChange={expenseAmountHandler} value={amount} />
            </div>
            <div className="new-expense__form--group">
                <button type="submit">Add</button>
            </div>
        </form>
    )
}

export default ExpenseForm;