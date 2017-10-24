import React from 'react';
import styled from 'styled-components';
import Link from './link';



const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.background};
    color: rgba(255, 255, 255, 0.8);
    padding: 0.75rem;
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    font-weight: 500;
    font-size: 1.125rem;
    color: rgba(255, 255, 255, 0.9);
    margin-top: 0 !important;
    margin-bottom: 1rem;
    text-transform: uppercase;
`;



const Containesr = ({ title, items, ...props }) => {
    const listItems = items.map((item) =>
        <li key={item.display}>
            <Link url={item.url}>
                {item.display}
            </Link>
        </li>
    );
    return <ul key={"list"}>{listItems}</ul>;
    // return ([
    //     <div key={"title"}>{title}</div>,
    //     <ul key={"list"}>{listItems}</ul>
    // ])
}

const Mesnu = styled(Container)`
    color: #24292e;
    background-color: #eff3f6;
    font-size: 12px;
    font-weight: 600;
    ul{
        list-style-type: none;
    }
    border: 1px solid red;
    padding-left: 20px;
    user-select: none;
    appearance: none;
`;


const Menu = ({ title, items, ...props }) => (
    <Container>
        <Title>{title}</Title>

    </Container>
)





export default Menu;






