import React from 'react'
import TableItem from '../TableItem/index.js'
import * as C from './styles.js'
import { deleteDoc, doc } from 'firebase/firestore';

const Table = ({ transactionsList, setTransactionsList, firestore }) => {
    const onDelete = async (ID) => {
      try {
        // Remove o documento do Firestore
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
            <TableItem key={index} item={item} onDelete={onDelete} />
          ))}
        </C.TableBody>
      </C.Table>
    );
  };
  
  export default Table;
