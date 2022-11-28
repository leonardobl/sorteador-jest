import { FormInit } from ".";
import React from "react";
import { render, screen } from "@testing-library/react";


test( "o formulario deve apresentar um input", ()=>{ 
  render( <FormInit /> )

  const input = screen.getByPlaceholderText("Insira os nomes dos participantes")

} )
