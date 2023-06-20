import styled from 'styled-components';

export const Container = styled.div`

    background-color: #fff;
    border-bottom: 5px solid #ee6b26;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    padding: 5px 10px;
    width: 25%;

    @media (max-width: 750px) {
        width: 20%;

        p{
            font-size: 14px;
        }

        span{
            font-size: 16px;
        }
        svg{
            display: none;
        }
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    gap: 10px;
    margin:5px auto;

    svg{
        width: 25px;
        height: 25px;
    }

`;

export const HeaderTitle = styled.p`
    font-size: 18px;
    color: #ee6b26;
`;

export const Total = styled.span`
    font-size: 30px;
    font-weight: bold;
`;