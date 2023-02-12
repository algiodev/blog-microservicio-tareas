# Emailer

11-02-2023  -   v.0.1.0

## Presentación

Micro servicio que se encarga de enviar correos electrónicos según los datos obtenidos a través de una cola de tareas desde Redis.

El micro servicio no cuenta con interfaz HTTP, solo recibe tareas desde Redis, las procesa y escribe el resultado en consola.

## Dependencias globales recomendadas

- pm2

## Instalación manual

- Clonar el repo.
- Ejecutar `npm install`.
- Renombrar el fichero `sample.env` a `.env` y configurarlo adecuadamente.
- Lanzar el servicio con `node index.js`.

## Tareas

Solo se procesan tareas enviadas a la cola `email`. Para enviar una tarea nueva, ejecuta el fichero `app/addTask.js`, pero asegúrate de tener el micro servicio corriendo antes, con la conexión de Redis establecida. El micro servicio espera recibir un objeto de tarea según se muestra el ejemplo:


```json
{
    "name": "AlgioDev Corp",
    "email": "alfredo@algio.dev",
    "to": "user-email@fake.local",
    "subject": "Welcome",
    "context": {
        "name": "Peter Griffin"
    },
    "id": "as1234"
}
```
