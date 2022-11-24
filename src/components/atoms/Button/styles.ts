import styled, { css } from "styled-components";


type ButtonProps = {
  bgc: string
  color: string
  fontSize: number,
  fontWeight: number,
  typeButton: "DEFAULT" | "MOBILE"
}

export const Container = styled.div``


export const Button = styled.button<ButtonProps>`



${ ({bgc, color, fontSize, fontWeight}) => css`
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
font-weight: ${fontWeight};
cursor: pointer;
gap: 16px;

` }


${({typeButton}) => typeButton === "DEFAULT" && css`
:hover {
 
  background-color: #4B69FD;
}
` }

`


export const Image = styled.img<{size: number}>`
${({size}) => css`
width: ${size}px;
height: ${size}px;
` }
`