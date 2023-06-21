import styled from 'styled-components';

export const TableRow = styled.tr``;

export const TableD = styled.td`
    padding: 20px;
  
    text-align: ${(props) => (props.aligncenter ? 'center' : 'start').toString()};
    word-break: break-all;

    svg{
        width:20px;
        height:20px;
        cursor: pointer;
    }

    `; 