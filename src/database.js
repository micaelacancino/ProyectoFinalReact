let usuarios = JSON.parse(localStorage.getItem("userData")) || [];


export const agregarUsuario = (usuario) => {
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