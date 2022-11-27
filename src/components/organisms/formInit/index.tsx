import React from 'react'
import { Button } from '../../atoms/Button'
import { Input } from '../../molecules/Input'
import * as S from "./styles"


type FormInitProps = {
  handleOnChange?: (list: string[]) => void
}

export const FormInit = ({handleOnChange}: FormInitProps) => {
  const [listNames, setListNames] = React.useState<string[]>([])
  
  
  function handleClick() {
    if(!handleOnChange) return
    handleOnChange(listNames)
  }
  
  
  return (
    <S.Container>
      <S.Content>
        <S.Title>Vamos começar!</S.Title> 
        <Input typeInput={'DEFAULT'} placeHolder={"Insira os nomes dos participantes"} handleOnChange={e => setListNames([...listNames, e])}  />
        <S.WrapperListNames>
          {listNames.map( item => <S.ItemList key={Math.random()}>{item}</S.ItemList> )}
        </S.WrapperListNames>
      </S.Content>
      <S.Footer>
        <Button isDisabled={!listNames.length}  textButton='Iniciar brincadeira!' theme='ORANGE' srcIcon='/icons/play_circle_outline.svg' typeButton={'DEFAULT'} onClick={handleClick} />
        <img src='/imagens/sacolas.png' />
      </S.Footer>
    </S.Container>
    )
  }
