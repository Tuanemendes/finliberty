import styled from 'styled-components';

export const Table = styled.table`
    width: 100%;
    background-color: white;
    max-width: 1820px;
    padding:20px;
    color: black;
    font-weight: bold;
    margin: 20px auto;
    `;

export const TableThead = styled.thead``;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr``;

export const TableHeaderColumn = styled.th`
    padding:15px;
    border-bottom: 1px solid #ee6b26;
    text-align: ${(props) => (props.aligncenter ? 'center' : 'start').toString()};
    width: ${(props) => (props.width ? props.width + '%': 'auto')};
`;