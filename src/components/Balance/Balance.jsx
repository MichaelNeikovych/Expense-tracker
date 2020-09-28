import React, {useContext} from "react";
import s from "./Balance.module.css";
import {GlobalContext} from "../Context/GlobalState";


const Balance = () => {
  const context = useContext(GlobalContext);
  const amounts = context.transactions.map(t => t.amount);
  const total = (amounts.reduce((acc, item) => (acc + item), 0)).toFixed(2);

  return (
    <div className={s.balance_box}>
      <h4 className={s.balance_title}>Your balance:</h4>
      <h3 className={s.balance}>${total}</h3>
    </div>
  )
}

export default Balance;