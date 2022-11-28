import { FormInit } from ".";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";


test( "O formulario deve apresentar um input para a adição dos nomes", ()=>{ 
  render( <FormInit /> )
  
  const input = screen.getByPlaceholderText("Insira os nomes dos participantes")
  expect(input).toBeInTheDocument()
  
} )

test( "O input deve esta em foco e vazio", ()=> {
  render(<FormInit />)
  const input = screen.getByPlaceholderText("Insira os nomes dos participantes")
  
  expect(input).toHaveFocus()
  expect(input).toHaveValue("")
  
} )

test("O formulario deve ter um botão para adicionar os nomes", ()=>{
  render(<FormInit />)
  const botaoIniciar = screen.getByRole("button", {
    name: /Adicionar/
  })
  
  expect(botaoIniciar).toBeInTheDocument()
  
})

test("O botão para adicionar os nomes deve iniciar desabilitado", ()=>{
  render(<FormInit />)
  const botaoAdicionar = screen.getByRole("button", {
    name: /Adicionar/
  })
  
  expect(botaoAdicionar).toBeDisabled()
  
})

test("O botão para adicionar os nomes deve ficar habilitado quando o input for preenchido", ()=>{
  render(<FormInit />)
  const input = screen.getByPlaceholderText("Insira os nomes dos participantes")
  const botaoAdicionar = screen.getByRole("button", {
    name: /Adicionar/
  })
  
  fireEvent.change(input, {
    target: {
      value: "Leonardo Lima"
    }
  })
  
  expect(botaoAdicionar).toBeEnabled()
  
})

test("quando clicar em adicionar a lista deve ser incrementada", ()=>{
  render(<FormInit />)
  const input = screen.getByPlaceholderText("Insira os nomes dos participantes")
  const botaoAdicionar = screen.getByRole("button", {
    name: /Adicionar/
  })
  
  fireEvent.change(input, {
    target: {
      value: "Leonardo Lima"
    }
  })
  
  fireEvent.click(botaoAdicionar)

  const wrapper = screen.findByTestId("wrapperListNomes")
  
  
  expect(wrapper).toBeLessThan(0)
  
})

test("O formulario deve ter um botão de iniciar a brincadeira", () => {
  render(<FormInit />)
  const buttonIniciar = screen.getByRole("button", {
    name: /Iniciar brincadeira/
  })
  
  expect(buttonIniciar).toBeInTheDocument()
})

test("O botão de iniciar a brincadeira deve iniciar desabilitado", () => {
  render(<FormInit />)
  const buttonIniciar = screen.getByRole("button", {
    name: /Iniciar brincadeira/
  })
  
  expect(buttonIniciar).toBeDisabled()
})




