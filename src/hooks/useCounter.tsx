import { useState } from "react";

export const useCounter = (initial = 0) => {
  const [valor, setValor] = useState(initial);

  const acumulador = (numero: number) => setValor((prev) => prev + numero);

  return { valor, acumulador };
};
