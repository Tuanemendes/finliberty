import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1820px;
    margin: 10px auto;
    background-color: #20295f;
    border-bottom: 5px solid #ee6b26;
    box-shadow: 0px 0px 6px #000;
    display: flex;
    gap: 10px;
    margin-top: 15px;
    padding:10px;
    justify-content: space-around;


    @media (max-width: 750px) {
        display: grid;
    }
`;

export const InputForm = styled.div`

    display: flex;
    flex-direction: column;

    @media (max-width: 750px) {
        width: 100%;
        margin-bottom: 10px;
    }
`;

export const Label = styled.label`
    margin-bottom: 10px;
    margin-left: 5px;
    color: #fff;
    font-weight: bold;
`;

export const Input = styled.input`
    padding: 8px;
    outline: none;
    border: 1px solid #ee6b26;
    border-radius: 5px;
    margin-bottom: 15px;
    font-size: 16px;
`;

export const Select = styled.div`
    display: flex;
    align-items: center;

    input{
        margin-left: 5px;
        accent-color: #ee6b26;
        margin-top: 5px;
    }
`;

export const Button = styled.button`
    padding: 5px 40px;
    margin-top: 15px;
    margin-bottom: 15px;
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: #ee6b26;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: all ease .4s;
`;
