let usuarios = JSON.parse(localStorage.getItem("userData")) || [];

localStorage.removeItem("userData");


export const agregarUsuario = (usuario) => {
  usuario.id = Date.now();
  usuarios.push(usuario);
  localStorage.setItem("userData", JSON.stringify(usuarios));
};


export const obtenerUsuarios = () => {
  return usuarios;
  
};


export const resetearUsuarios = () => {
  usuarios = [];
  localStorage.setItem("userData", JSON.stringify(usuarios));
};
