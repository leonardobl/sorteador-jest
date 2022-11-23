import styled, { css } from "styled-components";


type ButtonProps = {
  bgc: string
  color: string
  fontSize: number
}

export const Container = styled.div``


export const Button = styled.button<ButtonProps>`

${ ({bgc, color, fontSize}) => css`

width: max-content;
box-shadow: 4px 4px 0px #000000;
border-radius: 37.5px;
background-color: ${bgc};
color: ${color};
display: flex;
justify-content: center;
align-items: center;
padding: 18px 40px;
font-size: ${fontSize}px;
cursor: pointer;

` }`


export const Image = styled.img`
width: 40px;
height: 40px;
`