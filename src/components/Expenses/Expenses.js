import {  useState } from 'react';
import "./expenses.scss";
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import Filter from '../Filter/Filter';

function Expenses (props) {
    const [currentYear, switchCurrentYear] = useState('')
    const yearChangeHandler = (year) => {
        switchCurrentYear(year)
    }

    const filterExpense = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === currentYear
    })

    return (
        <Card className="expenses">
             <Filter onChangeYear={yearChangeHandler} />
            {
                filterExpense.map(expense => 
                    <ExpenseItem date={expense.date} item={expense.title} amount={expense.amount}></ExpenseItem>)
                
            }
        </Card>
    )
}

export default Expenses;