import { ExpenseDate } from './ExpenseDate';
import { Card } from '../UI/Card';
import classes from './ExpenseItem.module.css';
import { useState } from 'react';

export function ExpenseItem({ title, amount, date }) {
    const [t, setT] = useState(title);
    // let t = title;
    console.log('🚀 ~ file: ExpenseItem.js ~ line 7 ~ ExpenseItem ~ t', t);
    const clickHandler = () => {
        setT('new');
        console.log('🚀 ~ file: ExpenseItem.js ~ line 10 ~ clickHandler ~ t', t);
    };
    return <Card className={classes.expenseItem}>
        <ExpenseDate date={date} />
        <div className={classes.expenseItemDescription}>
            <h2>{t}</h2>
            <div className={classes.expenseItemPrice}>${amount}</div>
        </div>
        <button onClick={clickHandler}>Change</button>
    </Card>
}

