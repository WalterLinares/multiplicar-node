const fs = require('fs');
const colors = require("colors");

let listarTabla = async(base, limite) => {
    if (!Number(base) || !Number(limite)) {
        throw new Error("no es un numero");
    }

    let data = "";

    data += `==========================================\n`.green;
    data += ` TABLA DE ${base} \n`.green;
    data += `==========================================\n\n`.green;
    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${ base*i}\n`;
    }

    return data;
}

let crearArchivo = async(base, limite) => {

    if (!Number(base) || !Number(limite)) {
        throw new Error("no es un numero");
    }

    let data = "";
    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${ base*i}\n`;
    }

    fs.writeFileSync(`./tablas/tabla-${base}.txt`, data);
    return `./tablas/tabla-${base}.txt`.green;
};

module.exports = {
    crearArchivo: crearArchivo,
    listarTabla: listarTabla
}