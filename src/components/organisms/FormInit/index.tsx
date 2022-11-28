import React from 'react'
import * as S from "./styles"

export const FormInit = () => {
  const [nome, setNome] = React.useState("")
  const [listaNomes, setListaNomes] = React.useState<string[]>([])
  const inpRef = React.useRef<HTMLInputElement>(null)
  
  
  React.useEffect( ()=>{
    inpRef.current?.focus()
  }, [listaNomes] )
  
  
  function handleAdd() {
    setListaNomes([...listaNomes, nome])
    setNome("")
  }

function handleInit() {
  throw new Error("Função nao implementada")
}
  
  
  
  return (
    <S.Container>
      <S.Title>Vamos começar!</S.Title>
      <S.Form>
        <S.Input placeholder='Insira os nomes dos participantes' value={nome} onChange={e => setNome(e.target.value)} ref={inpRef} />
        <S.ButtonAdicionar disabled={!nome} onClick={handleAdd}>Adicionar</S.ButtonAdicionar>
      </S.Form>

      <S.WrapperListNomes id='wrapperListNomes'>
        {listaNomes.map( item => <S.ListNomeItem key={Math.random() + item}>{item}</S.ListNomeItem> )}
      </S.WrapperListNomes>

      <S.Footer>
        <S.ButtonIniciar disabled={!listaNomes?.length} onClick={handleInit}>
          <img src='/icons/play_circle_outline.svg'/>
          Iniciar brincadeira!
        </S.ButtonIniciar>
        <img src='/imagens/sacolas.png'/>
      </S.Footer>
   
    </S.Container>
    )
  }



