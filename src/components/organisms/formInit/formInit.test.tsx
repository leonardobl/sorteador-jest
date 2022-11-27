import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import React from "react";
import { FormInit } from ".";


test("quando o input esta vazio novos participantes nao podem ser adicionados", ()=>{
  render(<FormInit />)
  
  const input = screen.getByPlaceholderText("Insira os nomes dos participantes")

  expect(input).toBeInTheDocument()
  
} )

test("deve existir um botao de adicionar participante", ()=> {
  render(<FormInit />)

  const btnIniciar = screen.getByRole("button", {
    name: /Adicionar/
  })
  expect(btnIniciar).toBeInTheDocument()
  
} )

test("quando o input for preenchido o botao deve ser habilitado", ()=>{
render(<FormInit />)

  const btnAdicionar = screen.getByRole( "button", {
    name: /Adicionar/
  } )

  const input = screen.getByPlaceholderText("Insira os nomes dos participantes")

  fireEvent.change(input, {target: {
    value: "Leonardo Lima"
  }})

 expect(btnAdicionar).toBeEnabled()
})


test("o botao adicionar deve esta desabilitado", ()=>{
  render(<FormInit />)

  const btnIniciar = screen.getByRole("button", {
    name: /Adicionar/
  })
  expect(btnIniciar).toBeDisabled()
  
} )


test("deve existir um botao de Iniciar brincadeira", ()=>{
  render(<FormInit />)

  const btnIniciar = screen.getByRole("button", {
    name: /Iniciar brincadeira/
  })
  expect(btnIniciar).toBeInTheDocument()
  
} )


test( "botao iniciar brincadeira deve iniciar desabilitado", () => {

  render(<FormInit />)

  const btnIniciarBrincadeira = screen.getByRole("button", {
    name: /Iniciar brincadeira/
  })

  expect(btnIniciarBrincadeira).toBeDisabled()
} )

test("quando existir pelo menos um nome cadastrado o btn deve ser habilitado", ()=> {
  render(<FormInit />)

  const input = screen.getByPlaceholderText("Insira os nomes dos participantes")
  const btnIniciarBrincadeira = screen.getByRole("button", {
    name: /Iniciar brincadeira/
  })
  const btnAdicionar= screen.getByRole("button", {
    name: /Adicionar/
  })

  fireEvent.change( input, {
    target: {
      value: "Leonardo Lima"
    }
  } )

  fireEvent.click(btnAdicionar)

  expect(btnIniciarBrincadeira).toBeEnabled()
})


