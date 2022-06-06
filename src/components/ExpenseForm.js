import React, {useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enterTitle, setEnterTitle] = useState('');
    const [enterAmount, setEnterAmount] = useState('');
    const [enterDate, setEnterDate] = useState('');

    const titleHandler = (event) => {setEnterTitle(event.target.value)  };
    const amountHandler = (event) => { setEnterAmount(event.target.value) };
    const dateHandler = (event) => { setEnterDate(event.target.value) };
    const submitHandler = (event) => { event.preventDefault();
    const expenseData = { 
        title: enterTitle,
        amount: enterAmount,
        date: new Date(enterDate),
    };
    props.onSaveExpenseData(expenseData); 
    setEnterTitle('');
    setEnterAmount('');
    setEnterDate('');
  }
  
  return (
<form onSubmit={submitHandler}>
    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={enterTitle} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" value={enterAmount} onChange={amountHandler}/>
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2022-01-01" maxp="2022-12-31" value={enterDate} onChange={dateHandler}/>
        </div>
    </div>
    <div className="new-expense__actions">
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button type='submit'>ADD</button>
    </div>
</form>  )
}

export default ExpenseForm