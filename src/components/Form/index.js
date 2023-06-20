import React, { useState } from 'react'
import * as C from './styles'
import Table from '../Table';


const Form = ({handleAdd,transactionsList,setTransactionsList }) => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setCategory] = useState(false);

    const gereateId = () => {Math.round(Math.random() * 1000)};

    const handleSave = () => {
        if (!desc || !amount) {
            alert("Informe uma descrição e valor para continuar!");
            return;
        } else if( amount < 1) {
            alert("Informe um valor positivo!");
            return;
        }

        const transaction = {   
            id: gereateId(),
            desc: desc,
            amount: amount,
            expense: isExpense, 
        };

        handleAdd(transaction);

        setDesc("");
        setAmount("");

    };

    return (
        <>
            <C.Container>
                <C.InputForm>
                    <C.Label>Descrição</C.Label>
                    <C.Input value={desc} onChange={e => setDesc(e.target.value)} />
                </C.InputForm>
                <C.InputForm>
                    <C.Label>Valor</C.Label>
                    <C.Input value={amount} type='number' onChange={e => setAmount(e.target.value)} />
                </C.InputForm>
                <C.InputForm>
                    <C.Select>
                        <C.Input 
                        type="radio" 
                        name="radio1" 
                        id="expense" 
                        defaultChecked
                        onChange={() => setCategory(!isExpense)} />
                        <C.Label htmlFor="expense">Entrada</C.Label>
                        <C.Input 
                        type="radio" 
                        name="radio1" 
                        id="expenseExit" 
                        onChange={() => setCategory(!isExpense)} />
                        <C.Label htmlFor="expenseExit">Saída</C.Label>
                    </C.Select>
                </C.InputForm>
                <C.Button onClick={handleSave}>Adicionar</C.Button>
            </C.Container>
            <Table itens={transactionsList} setItens={setTransactionsList} />
        </>
    );
};

export default Form;