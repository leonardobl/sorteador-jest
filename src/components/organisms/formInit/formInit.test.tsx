import { render, screen } from "@testing-library/react";
import React from "react";
import { FormInit } from ".";


test("quando o input esta vazio novos participantes nao podem ser adicionados", ()=>{
  
  render(<FormInit />)
  
  const input = screen.getByPlaceholderText("Insira os nomes dos participantes")
  
  // const botao = screen.getByRole("button")
  
  expect(input).toBeInTheDocument()
  
} )