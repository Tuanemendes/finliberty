import React, { useState } from 'react';
import * as C from './styles';
import Table from '../Table';

const Form = ({ handleAdd, firestore }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [isExpense, setCategory] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newTransaction = {
      description: description,
      amount: amount,
      expense: isExpense,
    };

    await handleAdd(newTransaction);

    setDescription('');
    setAmount(0);
  };

  return (
    <>
      <C.Container>
        <C.InputForm>
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
              checked={!isExpense}
              onChange={() => setCategory(false)}
            />
            <C.Label htmlFor="expense">Receita</C.Label>
            <C.Input
              type="radio"
              name="radio1"
              id="expenseExit"
              checked={isExpense}
              onChange={() => setCategory(true)}
            />
            <C.Label htmlFor="expenseExit">Despesa</C.Label>
          </C.Select>
        </C.InputForm>
        <C.Button type="submit" onClick={handleSubmit}>
          Adicionar
        </C.Button>
      </C.Container>
      <Table firestore={firestore} />
    </>
  );
};

export default Form;
