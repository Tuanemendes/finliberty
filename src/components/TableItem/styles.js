import styled from 'styled-components';

export const TableRow = styled.tr``;

export const TableD = styled.td`
    padding-top: 15px;
    border-bottom: 1px solid #ee6b26;
    text-align: ${(props) => (props.alignCenter ? 'center' : 'start')};
    word-break: break-all;

    svg{
        width:18px;
        height:18px;
    }

    `; 