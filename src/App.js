import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import GlobalStyles from './styles/global.js';
import Header from './components/Header/index.js';
import Resume from './components/Resume/index.js';
import Form from './components/Form/index.js';

const firebaseConfig = {
  apiKey: 'AIzaSyDmIgeszzgVtjqCreeQ3lFrgsOR0h2N4fc',
  authDomain: 'finliberty-3e823.firebaseapp.com',
  projectId: 'finliberty-3e823',
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

const App = () => {
  const [transactionsList, setTransactionsList] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const transactionsCollectionRef = collection(firestore, 'transactions');

    const fetchTransactions = async () => {
      try {
        const querySnapshot = await getDocs(transactionsCollectionRef);
        const transactions = querySnapshot.docs.map((doc) => doc.data());
        setTransactionsList(transactions);
      } catch (error) {
        console.error('Erro ao buscar transações: ', error);
      }
    };

    fetchTransactions();
  }, []);

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount));

    const amountIncome = transactionsList
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = Math.abs(income - expense).toFixed(2);

    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? '-' : ''} R$ ${total}`);
  }, [transactionsList]);

  const handleAdd = async (transaction) => {
    try {
      const transactionsCollection = collection(firestore, 'transactions');

      // Adiciona o documento ao Firestore e gera um ID automático
      const docRef = await addDoc(transactionsCollection, transaction);
      console.log('Documento criado com ID:', docRef.id);

      // Atualiza a lista de transações localmente 
      const newTransactionsList = [...transactionsList, { ...transaction, id: docRef.id }];
      setTransactionsList(newTransactionsList);
    } catch (error) {
      console.error('Erro ao adicionar transação:', error);
    }
  };

  return (
    <>
      <Header />
      <Resume income={income} expense={expense} total={total} />
      <Form handleAdd={handleAdd} firestore={firestore} transactionsList={transactionsList} setTransactionsList={setTransactionsList} />
      <GlobalStyles />
    </>
  );
};

export default App;

