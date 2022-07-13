const colors = require('colors/safe');
const {creandoArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs')


// const [ , , arg3 = 'base=5'] = process.argv
// const[ , base=5] = arg3.split("=")

console.clear()


// console.log(process.argv)
console.log(argv)

console.log('base: yargs', argv.base)


// const base = 8

creandoArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(colors.rainbow(nombreArchivo), 'creado'))
    .catch(err => console.log(err))


