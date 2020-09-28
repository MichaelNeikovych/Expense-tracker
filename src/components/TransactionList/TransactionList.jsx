import React, {useContext} from "react";
import s from "./TransactionList.module.css";
import {GlobalContext} from "../Context/GlobalState";
import Transaction from "./Transaction/Transaction";

const TransactionList = () => {
  const context = useContext(GlobalContext);
  const liElements = context.transactions.map(t => <Transaction transaction={t} key={t.id} id={t.id} text={t.text} amount={t.amount}/>)

  return (
    <div className={s.transaction_list_wrap}>
      <h3 className={s.transaction_list_title}>History</h3>
      <ul className={s.transaction_list}>
        {liElements}
      </ul>
    </div>
  )
}

export default TransactionList;