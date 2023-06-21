import React, { useState } from 'react';
import * as C from './styles';
import Table from '../Table';

const Form = ({ handleAdd, firestore, transactionsList, setTransactionsList }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [isExpense, setCategory] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTransaction = {
      description:description,
      amount: amount,
      expense: isExpense,
    };

    handleAdd(newTransaction);

    setDescription('');
    setAmount(0);

  };

  return (
    <>
      <C.Container>
        <C.InputForm >
          <C.Label>Descrição</C.Label>
          <C.Input value={description} onChange={(e) => setDescription(e.target.value)} />
        </C.InputForm>
        <C.InputForm>
          <C.Label>Valor</C.Label>
          <C.Input value={amount} type="number" onChange={(e) => setAmount(e.target.value)} />
        </C.InputForm>
        <C.InputForm>
          <C.Select>
            <C.Input
              type="radio"
              name="radio1"
              id="expense"
              defaultChecked={!isExpense}
              onChange={() => setCategory(!isExpense)}
            />
            <C.Label htmlFor="expense">Receita</C.Label>
            <C.Input
              type="radio"
              name="radio1"
              id="expenseExit"
              checked={isExpense}
              onChange={() => setCategory(isExpense)}
            />
            <C.Label htmlFor="expenseExit">Despesa</C.Label>
          </C.Select>
        </C.InputForm>
        <C.Button type="submit" onClick={handleSubmit}>Adicionar</C.Button>
      </C.Container>
      <Table transactionsList={transactionsList} setTransactionsList={setTransactionsList} firestore={firestore} />
    </>
  );
};

export default Form;
