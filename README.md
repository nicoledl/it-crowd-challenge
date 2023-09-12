# IT Crowd Challenge - Shopping
Este proyecto es una aplicación web desarrollada con el framework Next.js y diseñada con Tailwind CSS. Proporciona funcionalidad para realizar pedidos a una base de datos desde el frontend utilizando Axios. Además, cuenta con un backend desarrollado con Node.js y trabajado con sequelize para manejar una base de datos de MySQL.

## Principales características y las librerías utilizadas en el proyecto:
Uso de Next.js para el frontend.
Integración de Tailwind CSS para el diseño.
Uso de librerías de diseño como next-themes, heroicons-react, react-spinners y tailwindcss-animated.
Realización de pedidos desde el frontend.
Backend con autenticación de usuario.
Autenticación de usuarios con bcrypt y JSON Web Tokens (JWT).
Interacción con una base de datos MySQL2, usando la aplicación MySQL Workbench, utilizando Sequelize.

## Librerías Utilizadas en el Servidor
bcrypt: Para el almacenamiento seguro de contraseñas.
cors: Middleware para el manejo de solicitudes CORS.
dotenv: Para cargar variables de entorno.
express: Framework de Node.js para la creación de API RESTful.
jsonwebtoken: Para generar y verificar tokens JWT.
mysql2: Cliente MySQL2 para Node.js.
nodemon: Herramienta de desarrollo para reiniciar automáticamente el servidor durante el desarrollo.
sequelize: ORM (Object-Relational Mapping) para interactuar con la base de datos.
*node-postgres

## Configuración y Ejecución Local
*Backend:
Clonar este repositorio: https://github.com/nicoledl/server-it-crowd-challengeIngrese 
Crear un archivo .env con los siguientes parametros con sus propios datos DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_HOST, DB_DIALECT, JWT_SECRET_KEY y PORT.
Primero ingresa en el directorio del backend, ejecuta npm install para instalar las dependencias.
Ejecuta npm run dev para iniciar el servidor backend.

*Frontend:
Clonar este repositorio: https://github.com/nicoledl/it-crowd-challenge
Entrar a la terminal de la carpeta 'Client', abrir la terminal y ejecuta npm install para instalar las dependencias.
Ejecuta npm run dev para iniciar el servidor frontend.

## Usuario de Administrador
Se ha creado un usuario de administrador predefinido para facilitar el acceso a la aplicación(Usuario "admin", contraseña "1234").

## Notas: 
1. Se generó un usuario predeterminado. No realicé registro por ser una aplicación pequeña, decidí hacerlo manualmente la aplicación que maneja pedidos de APIs 'Thunder Client'.
2. * Desde un principio realicé el deploy en la pagina railway, y tuve un inconveniente que no supe resolver, era con un pedido que utilizaba queries. Pidiendo opiniones me recomendaron usar render pero con postgres, por eso luego instale el paquete node-postgres.