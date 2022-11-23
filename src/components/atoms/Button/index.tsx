import React from 'react'
import * as S from "./styles"


const colors = {
  "GRAY" : {bgc: "#C4C4C4", color: "#444444"}, 
  "ORANGE" : {bgc: "#FE652B", color: "#444444"},
  "BLUE" : {bgc: "#4B69FD", color: "#444444"}
}

type ButtomProps = {
  theme: "GRAY" | "ORANGE" | "BLUE",
  textButton: string,
  srcIcon?: string
  fontSize: number
}



export const Button = ({textButton, theme, srcIcon, fontSize}: ButtomProps) => {
  return (
    <S.Container>
    <S.Button bgc={colors[theme].bgc} color={colors[theme].color} fontSize={fontSize}  >
      {srcIcon && <S.Image src={srcIcon} />}
      {textButton}
      </S.Button>
    </S.Container>
    )
  }
