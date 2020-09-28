import React, {useContext} from "react";
import s from "./IncomeExpenses.module.css";
import {GlobalContext} from "../Context/GlobalState";

const IncomeExpenses = () => {
  const context = useContext(GlobalContext);
  const amounts = context.transactions.map(t => t.amount);
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc + item), 0)
    .toFixed(2);
  const expense = (amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc + item), 0) * -1).toFixed(2);

  return (
    <div className={s.income_expense_box}>
      <div className={s.income_box}>
        <h4 className={s.income_title}>income</h4>
        <h3 className={s.income}>+${income}</h3>
      </div>
      <div className={s.expense_box}>
        <h4 className={s.expense_title}>expense</h4>
        <h3 className={s.expense}>-${expense}</h3>
      </div>
    </div>
  )
}

export default IncomeExpenses;