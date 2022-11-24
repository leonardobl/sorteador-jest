import styled from "styled-components";



export const Container = styled.div`
background-color: #4B69FD;
height: 100%;

`
export const WrapperContent = styled.div`
margin: 0 auto;
max-width: 1024px;
`

export const Header = styled.div`
height: 370px;
display: flex;
justify-content: center;



img:nth-child(1) {
  max-width: 350px;
  height: 117px;
  align-self: center;
}

img:nth-child(2) {
  max-width: 450px;
  height: 277px;
  align-self: flex-end;
  margin-bottom: -32px;
}

`

export const Content = styled.div`
background-color: #FFF9EB;
border: 2px solid #000000;
border-radius: 64px 64px 0px 0px;
min-height: calc(100vh - 370px);
padding: 87px 150px 0 150px;

`



export const Title = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 48px;
color: #4B69FD;
text-align: center;
margin-bottom: 36px;
`