import React from 'react'
import * as C from './styles'
import {
    FaAngleDown,
    FaAngleUp,
    FaTrashAlt,
} from 'react-icons/fa'


export const TableItem = ({ item, onDelete }) => {
    const handleDelete = () => {
        onDelete(item.id);
    };
    return (
        <C.TableRow>
            <C.TableD>{item.description}</C.TableD>
            <C.TableD>{item.amount}</C.TableD>
            <C.TableD aligncenter >
                {item.expense ? <FaAngleDown color="red" />  : <FaAngleUp color="green" />}
            </C.TableD>
            <C.TableD aligncenter >
                <FaTrashAlt color="grey" onClick={handleDelete} />
            </C.TableD>
        </C.TableRow>
    )
}

export default TableItem;