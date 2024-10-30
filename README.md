# Gestionador-de-tareas

una pequeña aplicacion de tareas to do list donde se podran gestionar tareas

# Gestión de Tareas - Backend

Este proyecto es un backend para una aplicación de gestión de tareas, construido con NestJS. Proporciona una API RESTful para la creación, lectura, actualización y eliminación (CRUD) de tareas. La API permite a los usuarios autenticados gestionar sus tareas de manera eficiente.

## Tecnologías Utilizadas

- **NestJS**: Framework para construir aplicaciones del lado del servidor con Node.js.
- **TypeScript**: Lenguaje de programación utilizado para el desarrollo.
- **Express**: Framework para manejar las solicitudes HTTP.
- **JWT**: JSON Web Token para la autenticación y autorización de usuarios.
- **In-memory storage**: Almacenamiento temporal en memoria para las tareas, sin uso de base de datos.

## Estructura del Proyecto

- `src/`
  - `auth/`: Módulo de autenticación para gestionar el registro y inicio de sesión de los usuarios.
  - `task/`: Módulo que gestiona las tareas, incluyendo su creación, lectura, actualización y eliminación.
  - `app.module.ts`: Módulo principal que importa otros módulos y configura la aplicación.
  - `main.ts`: Archivo de entrada para la aplicación.

## Endpoints de la API

### Autenticación

- **POST /auth/register**: Registra un nuevo usuario.
- **POST /auth/login**: Inicia sesión y devuelve un token JWT.

### Gestión de Tareas

- **POST /tasks**: Crea una nueva tarea. Requiere autenticación.
- **GET /tasks**: Lista todas las tareas del usuario autenticado. Requiere autenticación.
- **GET /tasks/:id**: Obtiene los detalles de una tarea específica. Requiere autenticación.
- **PUT /tasks/:id**: Actualiza una tarea existente. Requiere autenticación.
- **DELETE /tasks/:id**: Elimina una tarea específica. Requiere autenticación.

## Implementación

### Crear Tarea

La creación de una nueva tarea se maneja mediante la función `createTask` en el servicio de tareas. La tarea se almacena en un arreglo en memoria y se le asigna un `id` único.

### Obtener Tareas

Se puede obtener la lista de tareas del usuario autenticado mediante la función `getTasks`, que filtra las tareas por `userId`.

### Obtener Tarea por ID

La función `getTaskById` permite buscar una tarea específica mediante su `id`, asegurándose de que pertenezca al usuario autenticado.

### Actualizar Tarea

La actualización de una tarea se realiza con la función `updateTask`, que modifica los atributos de la tarea seleccionada.

### Eliminar Tarea

Las tareas se pueden eliminar mediante la función `deleteTask`, que busca la tarea en el arreglo y la elimina.

## Cómo Ejecutar el Proyecto

1. **Instalación de dependencias**:

   npm install

2. **Configuración de variables de entorno**:

Crea un archivo .env en la raíz del proyecto y añade las variables necesarias (por ejemplo, la URL de la API).

3. **Ejecutar el servidor**:

npm run start:dev

4. **Pruebas**:

Puedes usar herramientas como Postman o Insomnia para probar los endpoints de la API.

## Gestión de Tareas - Frontend

Este proyecto es el frontend para una aplicación de gestión de tareas, construido con Next.js. Proporciona una interfaz de usuario para el registro e inicio de sesión, permitiendo a los usuarios autenticarse y gestionar sus tareas de manera eficiente.

## Tecnologías Utilizadas

Next.js: Framework para construir aplicaciones web con React.
TypeScript: Lenguaje de programación utilizado para el desarrollo.
React: Biblioteca para construir interfaces de usuario.
Fetch API: Para realizar solicitudes HTTP a la API del backend.
CSS Modules: Para manejar estilos en componentes de manera modular.

## Estructura del Proyecto

src/
app/
login/: Módulo para la autenticación de usuarios mediante el inicio de sesión.
register/: Módulo para el registro de nuevos usuarios.
helpers/: Funciones auxiliares para manejar la autenticación y validación.

## Componentes Clave

**Registro**
Página de Registro (page.tsx): Permite a los usuarios crear una nueva cuenta proporcionando un correo electrónico y una contraseña.

**Funcionalidades**

**Validación**:

Se utiliza una función de validación para verificar los datos ingresados antes de enviarlos a la API.

**Manejo de Eventos**:

Incluye funciones para manejar cambios en los campos de entrada y el envío del formulario.

## Helpers

auth.helper.ts
Los helpers son funciones reutilizables que manejan la lógica de autenticación y las solicitudes a la API.

## Funciones Principales

register(dataUser): Envía una solicitud POST a la API para registrar un nuevo usuario.
login(dataUser): Envía una solicitud POST para autenticar al usuario y devuelve un token de acceso.

## Cómo Ejecutar el Proyecto

1. **Instalación de dependencias**:

npm install

2. **Ejecutar el servidor de desarrollo**:

npm run dev

3. **Acceder a la aplicación**:

Abre tu navegador y dirígete a http://localhost:4000
