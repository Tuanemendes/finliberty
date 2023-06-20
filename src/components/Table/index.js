import React from 'react'
import TableItem from '../TableItem/index.js'
import * as C from './styles.js'

export const Table = ({itens,setItens}) => {

    const onDelete = (id) => {
        const newItens = itens.filter((transaction) => transaction.id !== id);
        setItens(newItens);
        localStorage.setItem('transactions', JSON.stringify(newItens));
    };

  return (
    <C.Table>
        <C.TableThead>
            <C.TableRow>
                <C.TableHeaderColumn width={40}>Descrição</C.TableHeaderColumn>
                <C.TableHeaderColumn width={40}>Valor</C.TableHeaderColumn>
                <C.TableHeaderColumn width={10} alignCenter>Tipo</C.TableHeaderColumn>
                <C.TableHeaderColumn width={10}></C.TableHeaderColumn>
            </C.TableRow>
        </C.TableThead>
        <C.TableBody>
            {itens?.map((item, index) => (
                <TableItem key={index} item={item} onDelete={onDelete} />
            ))}
        </C.TableBody>
    </C.Table>


  );
};

export default Table;