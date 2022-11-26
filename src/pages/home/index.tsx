import React from 'react'
import { FormInit } from '../../components/organisms/formInit'
import * as S from "./styles"

export const Home = () => {
  const [isRead, setIsRead] = React.useState(false)
  const [listnames, setListNames] = React.useState<string[]>([])


  React.useEffect( ()=>{

  if(!listnames.length) return
    setIsRead(true)
  }, [listnames] )


  return (
    <S.Container>
      <S.WrapperContent>
        <S.Header>
          <img src='/imagens/logo.png' /> 
          <img src='/imagens/participante.png' /> 
        </S.Header>
        <S.Content>
          {!isRead ? <FormInit handleOnChange={setListNames} /> : <h1>Lima</h1>}
        </S.Content>
      </S.WrapperContent>
    
    </S.Container>
    )
  }
