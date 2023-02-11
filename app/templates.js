const Handlebars = require('handlebars');

const TEMPLATE = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenido</title>
</head>
<body>
    <p>Gracias por tu registro {{name}}</p>
</body>
</html>`

exports.getRender = (context) => {
    return new Promise( (resolve, reject) => {
        try {
            let template = Handlebars.compile(TEMPLATE);
            let render = template(context);
            resolve(render);
        } catch(error) {
            reject(error);
        }
    });
}
