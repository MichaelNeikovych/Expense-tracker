import React, {useContext} from "react";
import s from "./Transaction.module.css";
import {GlobalContext} from "../../Context/GlobalState";

const Transaction = (props) => {
  const context = useContext(GlobalContext);
  const sign = props.amount > 0 ? '+' : '-';

  return (
    <li className={s.transaction_list_item +' '+ (props.amount > 0 ? s._green : s._red)}>
      <span>{props.text}</span>
      <span>{sign +'$'+ Math.abs(props.amount)}</span>
      <button onClick={() => context.deleteTransaction(props.id)}>✗</button>
    </li>
  )
}

export default Transaction;