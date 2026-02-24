const Usuario= require('../models/usuario.model');

const crearUsuario = async (data) => {
    return await Usuario.create(data);
};

const listarUsuarios = async () => {
    return await Usuario.findAll();
};

//Obtener por el ID 
const obtenerUsuarioPorId = async (id) => {
    return await Usuario.findByPk(id);
};

//actualizar usuario por su ID
const actualizarUsuario = async (id, data) => {
    const usuario = await Usuario.findByPk(id);
    if (!usuario){
        return null;
    }
    await usuario.update(data);
    return usuario;
};

//Eliminar un usuario por su ID
const eliminarUsuario = async (id) => {
    const usuario = await Usuario.findByPk(id);
    if (!usuario){
        return null;
    }
    await usuario.destroy();
    // return true; // Solo indica que se eliminó, sin devolver el usuario
    return { eliminado: true, usuario };
};

module.exports = {
    crearUsuario,
    listarUsuarios,
    obtenerUsuarioPorId,
    actualizarUsuario,
    eliminarUsuario
};