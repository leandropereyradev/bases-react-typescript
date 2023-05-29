import { useCounter } from "../hooks/useCounter";

export const ContadorConHook = () => {
  const { valor, acumulador } = useCounter();

  return (
    <>
      <h3>
        Contador con Hook: <span>{valor}</span>
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
