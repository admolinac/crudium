// 🧩 Obtener la ruta actual del navegador

const getPath = (): string => {
  return location.pathname.toLowerCase() || "/";
};

export default getPath;