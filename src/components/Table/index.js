import React from 'react'
import TableItem from '../TableItem/index.js'
import * as C from './styles.js'

export const Table = ({itens,setItens}) => {

    const onDelete = (ID) => {
        const newItens = itens.filter((transaction) => transaction.id !== ID);
        setItens(newItens);
        localStorage.setItem('transactions', JSON.stringify(newItens));
    };

  return (
    <C.Table>
        <C.TableThead>
            <C.TableRow>
                <C.TableHeaderColumn width={40} >Descrição</C.TableHeaderColumn>
                <C.TableHeaderColumn width={40}>Valor</C.TableHeaderColumn>
                <C.TableHeaderColumn alignCenter width={10} >Tipo</C.TableHeaderColumn>
                <C.TableHeaderColumn alignCenter width={10} >Excluir</C.TableHeaderColumn>
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