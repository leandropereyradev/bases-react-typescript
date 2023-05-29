import { useState } from "react";

export const Contador = () => {
  const [valor, setValor] = useState(0);

  const acumulador = (numero: number) => setValor((prev) => prev + numero);

  return (
    <>
      <h3>
        Contador: <span>{valor}</span>
      </h3>
      <button className="btn btn-primary" onClick={() => acumulador(1)}>
        +1
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={() => acumulador(-1)}>
        -1
      </button>
    </>
  );
};
