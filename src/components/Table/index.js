import React, { useEffect } from 'react';
import TableItem from '../TableItem/index.js';
import * as C from './styles.js';
import { collection, deleteDoc, doc,onSnapshot } from 'firebase/firestore';

const Table = ({ firestore, transactionsList, setTransactionsList }) => {
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(firestore, 'transactions'), (snapshot) => {
      const transactions = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setTransactionsList(transactions);
    });

    return () => {
      unsubscribe();
    };
  }, [firestore, setTransactionsList]);

  const onDelete = async (ID) => {
    try {
      await deleteDoc(doc(firestore, 'transactions', ID));
      const updatedTransactions = transactionsList.filter((transaction) => transaction.id !== ID);
      setTransactionsList(updatedTransactions);
    } catch (error) {
      console.error('Erro ao excluir transação:', error);
    }
  };

  return (
    <C.Table>
      <C.TableThead>
        <C.TableRow>
          <C.TableHeaderColumn width={40}>Descrição</C.TableHeaderColumn>
          <C.TableHeaderColumn width={40}>Valor</C.TableHeaderColumn>
          <C.TableHeaderColumn aligncenter width={10}>
            Tipo
          </C.TableHeaderColumn>
          <C.TableHeaderColumn aligncenter width={10}>
            Excluir
          </C.TableHeaderColumn>
        </C.TableRow>
      </C.TableThead>
      <C.TableBody>
        {transactionsList?.map((item, index) => (
          <TableItem key={index} item={item} onDelete={onDelete} />
        ))}
      </C.TableBody>
    </C.Table>
  );
};

export default Table;
