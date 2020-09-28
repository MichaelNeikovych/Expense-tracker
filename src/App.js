import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Balance from "./components/Balance/Balance";
import IncomeExpenses from "./components/IncomeExpenses/IncomeExpenses";
import TransactionList from "./components/TransactionList/TransactionList";
import AddTransaction from "./components/AddTransaction/AddTransaction";
import {GlobalProvider} from './components/Context/GlobalState';

function App() {
  return (
    <div className='app-wrap'>
      <Header/>
      <div className="balance_container">
        <GlobalProvider>
          <Balance/>
          <IncomeExpenses/>
          <TransactionList/>
          <AddTransaction/>
        </GlobalProvider>
      </div>
    </div>
  );
}

export default App;
