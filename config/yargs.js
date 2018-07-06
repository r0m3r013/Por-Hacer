const opt = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: "Descripción de la tarea por hacer"
    },
    completado: {
        alias: 'c',
        default: true,
        desc: "Marca como completado o pendiente la tarea"
    }
};
const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', opt)
    .command('actualizar', 'Actualiza el estado completado de una tarea', opt)
    .command('borrar', 'Actualiza el estado completado de una tarea', opt)
    .help()
    .argv;
module.exports = {
    argv
};