import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
import { TiposBasicos } from "./typescript/TiposBasicos";

export const App = () => {
  return (
    <div className="mt-2">
      <h1>Introducción React TS</h1>
      <hr />
      <TiposBasicos />
      <br />
      <ObjetosLiterales />
    </div>
  );
};
