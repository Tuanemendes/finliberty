import styled from 'styled-components';

export const Table = styled.table`
    width: 100%;
    background-color: #20295f;
    padding: 10px;
    border-radius: 5px;
    max-width: 1820px;
    margin: 10px auto;
    border-bottom: 5px solid #ee6b26;
    box-shadow: 0px 0px 6px #000;
    display: flex;
    gap: 10px;
    margin-top: 15px;
    padding:10px;
    justify-content: space-around;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    text-align: center;
    `;

export const TableThead = styled.thead``;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr``;

export const TableHeaderColumn = styled.th`
    padding: 10px;
    border-bottom: 1px solid #ee6b26;
    text-align: ${(props) => (props.center ? 'center' : 'start')};
    width: ${(props) => (props.width ? props.width + '%': 'auto')};
`;