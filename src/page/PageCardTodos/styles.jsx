import styled from "styled-components";

export const Painelproduto = styled.div`
    background-color: #fff;
    padding: 1rem;
    border-radius: 2rem;
    height: 5rem;
    box-shadow: 0 2rem 3rem rgba(132, 139, 200, 0.18);
    cursor: pointer;
    transition: all 0.3s ease;
    align-content: center;

`



export const Quadradolist = styled.div`
    padding: 2rem;
    border-radius: 2rem;
    margin-top: 1rem;
    margin-left: 1rem;
    height: auto;
    box-shadow: 0 2rem 3rem rgba(132, 139, 200, 0.18);
    cursor: pointer;
    transition: all 0.1s ease;
    text-align: center;

    &:hover{ 
        transform: scale(1.1);
        background-color: #e6e6e6;
        }
`

export const Listeproduto = styled.ul`
list-style: none;
display: flex;

`
export const Liste = styled.li`
 display: flex;
 flex-direction:column;
 align-items:center;
`

export const Imgproduto =styled.img`
width:120px;
border-radius: 1rem;
margin-bottom: 2rem;
`