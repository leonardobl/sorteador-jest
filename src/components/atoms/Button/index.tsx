import React from 'react'
import * as S from "./styles"


const colors = {
  "GRAY" : {bgc: "#C4C4C4", color: "#444444"}, 
  "ORANGE" : {bgc: "#FE652B", color: "#FFFFFF"},
}

const sizes = {
 "DEFAULT" : {size: 20, wigth: 600, iconSize: 40},
 "MOBILE" : {size: 16, wigth: 400, iconSize: 24},
}

type ButtomProps = {
  theme: "GRAY" | "ORANGE",
  textButton: string,
  srcIcon?: string,
  typeButton: "DEFAULT" | "MOBILE"
}



export const Button = ({textButton, theme, srcIcon, typeButton}: ButtomProps) => {
  return (
    <S.Container>
    <S.Button bgc={colors[theme].bgc} color={colors[theme].color} fontSize={sizes[typeButton].size} fontWeight={sizes[typeButton].wigth}  typeButton={typeButton} >
    {srcIcon && <S.Image src={srcIcon}  size={sizes[typeButton].iconSize} />}
    {textButton}
    </S.Button>
    </S.Container>
    )
  }
