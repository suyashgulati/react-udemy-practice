import classes from './ExpenseDate.module.css'

export function ExpenseDate({ date }) {

    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();
    const day = date.toLocaleString('en-US', { day: '2-digit' });

    return <div className={classes.expenseDate}>
        <div className={classes.expenseDateMonth}>{month}</div>
        <div className={classes.expenseDateYear}>{year}</div>
        <div className={classes.expenseDateDay}>{day}</div>
    </div>
}
