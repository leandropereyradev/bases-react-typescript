import { useEffect, useState, useRef } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResListado, Usuario } from "../interfaces/reqRes";

export const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>();

  const paginaRef = useRef(1);

  useEffect(() => {
    return () => {
      cargarUsuarios();
    };
  }, []);

  const cargarUsuarios = async () => {
    const res = await reqResApi.get<ReqResListado>("/users", {
      params: {
        page: paginaRef.current,
      },
    });

    if (res.data.data.length > 0) {
      setUsuarios(res.data.data);
      paginaRef.current++;
    } else {
      alert("No hay mas registros");
    }
  };

  return {
    usuarios,
    cargarUsuarios,
  };
};
