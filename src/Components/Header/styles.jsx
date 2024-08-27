import styled from "styled-components";

export const Headerdash = styled.header`
width: 100%;
height: 90px;
background-color: var(--color-white);
box-shadow: var(--box-shadow);
direction: row;
display: flex;
align-items: center;


`
export const Containerfluido = styled.div`
width: 100%;
.linha{
    margin: 0px !important;
    direction: row;
    display: flex;
    align-items: center;

}
.Links-logo{
    flex: 0 0 25%; 
}
.Link{
    display: flex;
    align-items: center;
    text-decoration: none;
}

button.rounded-circle{
    min-height: 60px !important;
    width: 5px !important;
    height: 5px !important;
    background: #ffff !important;
    color: white;
    margin: 0 10px;

&:active{
    color: blue;
    
}
}

button.rounded-circle svg{
    color: black;
    font-size: 18px !important;
    transition: all 0 3s ease-in-out;
    &:hover{
        color: blue;

    }}

`
export const Logomarcaimg = styled.img`
width: 100px;
`
export const Logonome = styled.span`
font-family: 'Poppins', sans-serif;
font-size: 24px;
font-weight: 800;
color: black;
.Danger{
    color: green;
}
`

export const Iconsheader= styled.div`
margin: 0 25px;
.Usermenu li{
    font-size: 15px;
}

`
export const Minhaacc= styled.button`
border: 0px;
background: transparent;
display: flex;

:active{
    color: blue;
 }
 .info{
    
    align-items: center;
    gap: 0;
    justify-content: flex-start;
    margin-bottom: 3px;
 }

.rounded-circle{
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 40px;
    height: 40px;
    cursor: pointer;
    position: relative;
    border: 2px solid blue;
    padding: 2px;
    border-radius: 100%;
    
}
.perfilimg{
    
    object-fit: cover;
    width: 40px;
    
    
}
`
export const Userinfo = styled.div`
padding-left: 10px;
h4{
    margin-bottom: 0px;
    font-size: 16px;
    font-weight: 600;
}
p{
    margin-top: 0px;
    font-size: 12px;
    color: #000;
    opacity: 0.7; 
    text-align: left !important; 
}
`
export const Frasemenu = styled.h4`
padding: 10px 25px;
font-size: 20px;
font-weight: 600;

`
export const Usernotifi = styled.div`

h4{
    font-size:13px;
font-weight:400;   
 }
`
export const Notifioper = styled.p`
color: black;
font-size: 12px;
text-align: center;
font-weight: 700;
`
export const BtnFinalmenu = styled.div`
text-align: center;
border: 0px;
background-color: transparent;

`