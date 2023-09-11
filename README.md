# IT Crowd Challenge - Shopping

Este proyecto es una aplicación web desarrollada con el framework Next.js y diseñada con Tailwind CSS. Proporciona funcionalidad para realizar pedidos a una base de datos desde el frontend utilizando Axios. Además, cuenta con un backend desarrollado con Node.js y Sequelize para organizar la base de datos. A continuación, se detallan las principales características y las librerías utilizadas en el proyecto:

# Características
Realización de pedidos desde el frontend.
Backend con autenticación de usuario.
Uso de Next.js para el frontend.
Integración de Tailwind CSS para el diseño.
Uso de librerías de diseño como next-themes, heroicons-react, react-spinners y tailwindcss-animated.
Autenticación de usuarios con bcrypt y JSON Web Tokens (JWT).
Interacción con una base de datos MySQL2, usando la aplicación MySQL Workbench, utilizando Sequelize.

# Librerías Utilizadas
*Frontend:
next-themes: Para cambiar fácilmente entre temas de la aplicación.
heroicons-react: Iconos para la interfaz de usuario.
react-spinners: Componentes de carga animada.
tailwindcss-animated: Animaciones CSS con Tailwind CSS.

*Backend:
bcrypt: Para el almacenamiento seguro de contraseñas.
cors: Middleware para el manejo de solicitudes CORS.
dotenv: Para cargar variables de entorno.
express: Framework de Node.js para la creación de API RESTful.
jsonwebtoken: Para generar y verificar tokens JWT.
mysql2: Cliente MySQL2 para Node.js.
nodemon: Herramienta de desarrollo para reiniciar automáticamente el servidor durante el desarrollo.
sequelize: ORM (Object-Relational Mapping) para interactuar con la base de datos.

# Configuración y Ejecución Local
Para ejecutar la aplicación localmente, sigue estos pasos:
*Backend:
Ingrese en el .env los siguientes parametros con sus datos DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_HOST, DB_DIALECT y JWT_SECRET_KEY.
Primero ingresa en el directorio del backend, ejecuta npm install para instalar las dependencias.
Ejecuta npm run dev para iniciar el servidor backend.

*Frontend:
En el directorio del frontend, ejecuta npm install para instalar las dependencias.
Ejecuta npm run dev para iniciar el servidor frontend.
Uso
Accede a la aplicación desde tu navegador con la url "localhost:3001/"

# Usuario de Administrador
Se ha creado un usuario de administrador predefinido para facilitar el acceso a la aplicación(Usuario "admin", contraseña "1234").

Notes: Decidí ya generar un usuario de administrador. No realicé un register porque me puse en el lugar de si tuviera yo misma la página, si quisiera agregar otro usuario preferiría hacerlo manualmente. Pero en caso de que sea una aplicación más grande generaría un register donde solo algunas personas puedan tener acceso, pondría como una contraseña/clave predefinida para acceder al registro.