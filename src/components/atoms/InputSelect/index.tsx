import React from 'react'
import * as S from "./styles"



type SelectProps = {
  handleOnchange?: (item: SelectValues | null) => void
  typeSelect: "DEFAULT" | "MOBILE",
  placeHolder?: string,
  options: SelectValues[],
}

export type SelectValues = {
  value: any,
  label: string,
  element?: any
} 



export const InputSelect = ({ handleOnchange, typeSelect, placeHolder, options }: SelectProps) => {
  const [selected, setSelected] = React.useState("")
  
  React.useEffect( ()=>{
    if(!handleOnchange) return
    handleOnchange( options.find( item => item.value === selected ) || null )
  }, [selected] )
  
  
  return (
    <S.Container>
    <S.Select onChange={e => setSelected(e.target.value)}>
    <S.Option>Teste</S.Option>
    {options.map( item => <S.Option value={item?.value} key={Math.random()}>{item?.label}</S.Option> )}
    </S.Select>
    </S.Container>
    )
  }
