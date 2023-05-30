import { Contador } from "./components/Contador";
import { ContadorConHook } from "./components/ContadorConHook";
import { Formularios } from "./components/Formularios";
import { Login } from "./components/Login";
import { Usuarios } from "./components/Usuarios";
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
      <br />
      <br />
      <ContadorConHook />
      <br />
      <br />
      <Login />
      <br />
      <br />
      <Usuarios />
      <br />
      <br />
      <Formularios />
    </div>
  );
};
