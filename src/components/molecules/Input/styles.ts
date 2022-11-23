import styled, { css } from "styled-components";



type InputProps = {
  typeInput: "DEFAULT" | "MOBILE"
  isEmpty: boolean
}


export const Container = styled.div<InputProps>`

${ ({typeInput}) => typeInput === "MOBILE" ? css`
display: flex;
gap: 16px;
flex-direction: column;
align-items: center;

`: css`
display: flex;
`}


${({isEmpty, typeInput}) => isEmpty && css`

${typeInput === "MOBILE" && css`

button{
  width: fit-content;
}

`}

position: relative;

::after {
  content: url("/icons/person_add.svg");
  display: block;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 20px;
  left: 30px;
}

` }


`

export const Input = styled.input<InputProps>`

width: 100%;
background: #FFFFFF;
mix-blend-mode: normal;
padding: 15px 15px 15px 60px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #444444;
outline: none;

::placeholder {
  color: rgba(0, 0, 0, 0.3);
}




${({typeInput}) => typeInput === "DEFAULT" ? css`

background: #FFFFFF;
border: 2px solid #000000;
box-shadow: 4px 4px 0px #000000;
border-radius: 37.5px 0px 0px 37.5px;
` : css`
border: 2px solid #000000;
box-shadow: 4px 4px 0px #000000;
border-radius: 32px;
` } `


export const ButtonInput = styled.button<{typeInput: "DEFAULT" | "MOBILE"}>`

padding: 18px 40px;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
display: flex;
align-items: center;
text-align: center;
color: #444444;
mix-blend-mode: normal;
cursor: pointer;
background: #C4C4C4;
border: 2px solid #000000;
box-shadow: 4px 4px 0px #000000;


${({typeInput}) => typeInput === "DEFAULT" ? css`
border-radius: 0px 37.5px 37.5px 0px;
` : css`
border-radius: 37.5px;
` }




`

