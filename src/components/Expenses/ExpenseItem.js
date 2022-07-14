import { useState } from 'react';
import './ExpenseItem.scss';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem (props) {
    const [title, changeState ] = useState(props.title)
    console.log(useState(props.title))
    const clickHandler = () => {
        changeState('Stationary')
        console.log('did executed')
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">RM{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change</button>
        </Card>
    )
}

export default ExpenseItem;