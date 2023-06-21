import React, { useEffect, useState } from 'react';
import TableItem from '../TableItem/index.js';
import * as C from './styles.js';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

const Table = ({ firestore }) => {
  const [transactionsList, setTransactionsList] = useState([]);

  useEffect(() => {
    const loadTransactions = async () => {
      try {
        // Consulta a coleção "transactions" no Firestore
        const querySnapshot = await getDocs(collection(firestore, 'transactions'));

        // Mapeia os documentos retornados para um array de transações
        const transactions = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

        // Atualiza a lista de transações localmente
        setTransactionsList(transactions);
      } catch (error) {
        console.error('Erro ao carregar transações:', error);
      }
    };

    // Chama a função para carregar as transações ao montar o componente
    loadTransactions();
  }, []);

  const onDelete = async (ID) => {
    try {
      // Remove o documento do Firestore usando o ID
      await deleteDoc(doc(firestore, 'transactions', ID));

      // Atualiza a lista de transações localmente
      const newTransactionsList = transactionsList.filter((transaction) => transaction.id !== ID);
      setTransactionsList(newTransactionsList);
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
          <TableItem key={index} item={item} onDelete={() => onDelete(item.id)} />
        ))}
      </C.TableBody>
    </C.Table>
  );
};

export default Table;
