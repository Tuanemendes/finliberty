import React, { useState, useEffect } from 'react';
import GlobalStyles from './styles/global.js';
import Header from './components/Header/index.js';
import Resume from './components/Resume/index.js';
import Form from './components/Form/index.js';

const App = () => {
  const data = localStorage.getItem('transactions');
  const [transactionsList, setTransactionsList] = useState(data ? JSON.parse(data) : []);

  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount));

    const amountIncome = transactionsList
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0);
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0);

    const total = Math.abs(income - expense);

    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? '-' : ''} R$ ${total}`);

  }, [transactionsList]);

  const handleAdd = (transaction) => {
    const newTransactionsList = [...transactionsList, transaction];
    setTransactionsList(newTransactionsList);

    localStorage.setItem('transactions', JSON.stringify(newTransactionsList));

  };

  return (
    <>
      <Header />
      <Resume income={income} expense={expense} total={total} />
      <Form handleAdd={handleAdd} transactionsList={transactionsList} setTransactionsList={setTransactionsList} />
      <GlobalStyles />

    </>
  );
};
export default App;
