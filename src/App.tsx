import { Contador } from "./assets/components/Contador";
import { Funciones } from "./typescript/Funciones";
import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
import { TiposBasicos } from "./typescript/TiposBasicos";

export const App = () => {
  return (
    <div className="mt-2">
      <h1>Introducción React TS</h1>
      <hr />
      <TiposBasicos />
      <br />
      <br />
      <ObjetosLiterales />
      <br />
      <Funciones />
      <br />
      <br />
      <Contador />
    </div>
  );
};
