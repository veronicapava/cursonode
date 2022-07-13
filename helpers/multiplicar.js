const fs = require('fs')
const colors = require('colors/safe');

const crearArchivo = async (base = 5, listar = false, hasta= 10) => {
    let salida = ""
     
    for (let i = 1; i <= hasta; i++) {
        salida += `${base} * ${i} = ${base * i} \n`
    }

    if(listar){
        console.log("-----------------------")
        console.log(colors.red.underline(`   Tabla del  ${base}`))
        console.log("-----------------------")
        console.log(colors.green(salida));
    }
   

    fs.writeFileSync(`tabla-${base}.txt`, salida)
    return `tabla-${base}.txt creado`
}

module.exports = {
    creandoArchivo: crearArchivo
}