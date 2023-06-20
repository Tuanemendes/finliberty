import React from 'react'
import * as C from './styles'
import {
    FaAngleDown,
    FaAngleUp,
    FaTrashAlt,
} from 'react-icons/fa'


export const TableItem = ({ item, onDelete }) => {
    const handleDelete = () => {
        console.log("ID:", item.id); // Imprime o ID no console do navegador
        onDelete(item.id);
    };
    return (
        <C.TableRow>
            <C.TableD>{item.desc}</C.TableD>
            <C.TableD>{item.amount}</C.TableD>
            <C.TableD alignCenter>
                {item.expense ? <FaAngleDown color="red" />  : <FaAngleUp color="green" />}
            </C.TableD>
            <C.TableD alignCenter>
                <FaTrashAlt color="grey" onClick={handleDelete} />
            </C.TableD>
        </C.TableRow>
    )
}

export default TableItem;