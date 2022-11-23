import React from 'react'
import * as S from "./styles"

type InputProps = {
  typeInput: "DEFAULT" | "MOBILE",
  placeHolder?: string
}

export const Input = ({typeInput, placeHolder}: InputProps) => {

  const [textInput, setTextInput] = React.useState("")
  const [isEmpty, setIsEmpty] = React.useState(true)


  React.useEffect( ()=>{

    if(!textInput) {
      setIsEmpty(true)
      return
    }

    setIsEmpty(false)

  }, [textInput] )


  return (
    <S.Container isEmpty={isEmpty} typeInput={typeInput} >
      <S.Input typeInput={typeInput} placeholder={placeHolder} onChange={e => setTextInput(e.target.value)} value={textInput} isEmpty={isEmpty} />
      <S.ButtonInput typeInput={typeInput} >Adicionar</S.ButtonInput>
    </S.Container>
  )
}
