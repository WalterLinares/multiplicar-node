const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");
const { argv } = require("./config/yargs");

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite).
        then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            });
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite).
        then(archivo => {
                console.log(`se creo el archivo: ${archivo}`);
            })
            .catch(err => {
                console.log(err);
            });
        break;

    default:
        console.log("comando desconocido");
};