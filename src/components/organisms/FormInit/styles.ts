import styled from "styled-components";


export const Title = styled.h1`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 48px;
text-align: center;
color: #4B69FD;
margin-bottom: 36px;
`

export const Container = styled.div`
margin-bottom: 60px;
`

export const Form = styled.form`
display: flex;
position: relative;


::after {
  position: absolute;
  content: url("/icons/person_add.svg");
  left: 30px;
  bottom: 18px;
}
`

export const Input = styled.input`
background: #FFFFFF;
mix-blend-mode: normal;
width: 100%;
outline: none;
border: 2px solid #000000;
box-shadow: 4px 4px 0px #000000;
padding: 18px 37px 18px 70px;
border-radius: 37.5px 0px 0px 37.5px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #444444;


::placeholder {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  
  color: rgba(0, 0, 0, 0.3);
}

`

export const ButtonAdicionar = styled.button`
background: #C4C4C4;
mix-blend-mode: normal;
border: 2px solid #000000;
box-shadow: 4px 4px 0px #000000;
padding: 18px 37px;
border-radius: 0px 37.5px 37.5px 0px;
cursor: pointer;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
text-align: center;
color: #444444;
mix-blend-mode: normal;

:disabled {
  color: #999;
  cursor: not-allowed;
}

`


export const ButtonIniciar = styled.button`
background: rgba(254, 101, 43, 0.99);
mix-blend-mode: normal;
border: 2px solid #000000;
box-shadow: 4px 4px 0px #000000;
border-radius: 37.5px;
cursor: pointer;
padding: 18px 40px;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 30px;
display: flex;
align-items: center;
letter-spacing: 0.0125em;
color: #FFFFFF;
display: flex;
height: fit-content;
gap: 20px;

:hover {
  background: rgba(75, 105, 253, 0.99);
}

:disabled {
  cursor: not-allowed;
  background: #C4C4C4;
}
`


export const WrapperListNomes = styled.div`
margin: 40px 0;
`


export const ListNomeItem = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
text-align: center;
color: #444444;
mix-blend-mode: normal;

`

export const Footer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`