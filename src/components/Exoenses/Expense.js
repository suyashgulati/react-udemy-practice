import { ExpenseItem } from './ExpenseItem';
import { Card } from '../UI/Card';
import classes from './Expense.module.css';

export function Expense({ expenses }) {
    return (
        <Card className={classes.expenses}>
            {expenses.map(e => <ExpenseItem key={e.id} {...e} />)}
        </Card>
    )
}
