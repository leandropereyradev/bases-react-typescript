/* eslint-disable @typescript-eslint/no-inferrable-types */
export const TiposBasicos = () => {
  const nombre: string = "Leandro";
  const edad: number = 35;
  const estaActivo: boolean = true;

  const poderes = ["Velocidad", "Volar", "Respidad en el agua"];

  return (
    <>
      <h3>Tipos Básicos</h3>
      {nombre}, {edad}, {estaActivo ? "activo" : "no está activo"}
      <br />
      {poderes.join(", ")}
    </>
  );
};
