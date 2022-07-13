const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Numero base de la tabla de mult'
    })
    .check((argv, options) => {
       if(isNaN(argv.b)){
        throw 'La base debe ser un numero'
       }
       return true
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Lista la tabla de mult si existe'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Num hasta donde llega la tabla'
    })
    .argv

module.exports = argv