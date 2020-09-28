import React, {useState, useContext} from "react";
import s from "./AddTransaction.module.css";
import {GlobalContext} from "../Context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const context = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random()*100000000),
      text,
      amount: +amount
    }
    context.addTransaction(newTransaction);
    setText('');
    setAmount(0);
  }

  return (
    <div className={s.transaction_wrap}>
      <h3 className={s.transaction_title}>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className={s.form_control}>
          <label htmlFor='text'>Text </label>
          <input value={text} onChange={e => setText(e.target.value)} type="text" placeholder='Enter text...'/>
        </div>
        <div className={s.form_control}>
          <label htmlFor='amount'>Amount (negative - expense, positive - income) </label>
          <input value={amount} onChange={e => setAmount(e.target.value)} type="text" placeholder='Enter amount...'/>
        </div>
        <button type='submit' className={s.add_btn}>Add transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction;