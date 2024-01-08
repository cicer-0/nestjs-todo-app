**Documentación para la Aplicación**

## Estructura General del Proyecto

El proyecto se organiza en dos directorios principales: `server` y `todo-client`. Cada uno de ellos representa una parte diferente de la aplicación.

### `server`

En el directorio `server`, se encuentra la implementación del servidor backend. A continuación, se detalla la estructura:

- **`db`**: Contiene un script (`init-users-db.sh`) para inicializar la base de datos.

- **`src`**: Aquí se encuentra la lógica principal de la aplicación.

  - **`app.controller.ts`**: Controlador principal de la aplicación.
  
  - **`app.module.ts`**: Módulo principal que importa y configura todos los demás módulos de la aplicación.

  - **`auth`**: Directorio que contiene la implementación del sistema de autenticación.

  - **`core`**: Módulo que maneja aspectos fundamentales de la aplicación, como los filtros de excepciones HTTP.

  - **`main.ts`**: Archivo de entrada principal de la aplicación.

  - **`migration`**: Contiene scripts para migraciones de la base de datos.

  - **`mock`**: Directorio que contiene archivos de datos de prueba.

  - **`shared`**: Contiene archivos compartidos, como funciones de utilidad y mapeadores.

  - **`todo`**: Implementación del módulo de tareas (to-do).

  - **`users`**: Módulo de usuarios que gestiona la creación, autenticación y otros aspectos relacionados con los usuarios.

### `todo-client`

Este directorio contiene la implementación del cliente frontend utilizando Angular. La estructura se organiza de la siguiente manera:

- **`projects`**: Contiene subproyectos de Angular para diferentes funcionalidades.

  - **`app-common`**: Módulo común utilizado en toda la aplicación.

  - **`auth`**: Módulo de autenticación que maneja la interfaz de usuario y servicios relacionados con la autenticación.

  - **`todo`**: Módulo principal para la gestión de tareas.

- **`src`**: Contiene la implementación de la interfaz de usuario.

  - **`app`**: Componentes y módulos principales de la aplicación.

  - **`assets`**: Recursos estáticos, como imágenes.

  - **`environments`**: Configuraciones de entorno para producción y desarrollo.

  - **`proxy.conf.json`**: Configuración de proxy para gestionar las solicitudes entre el cliente y el servidor.

## Tecnologías Utilizadas

### Backend

- **NestJS**: Framework de Node.js para la construcción de aplicaciones server-side robustas y escalables.

- **TypeORM**: Biblioteca de Object-Relational Mapping (ORM) para TypeScript y JavaScript.

- **Jest**: Framework de pruebas para JavaScript y TypeScript.

### Frontend

- **Angular**: Framework de desarrollo para construir aplicaciones web de una sola página (SPA).

- **Karma**: Framework de pruebas unitarias para JavaScript.

## Despliegue y Ejecución

1. **Backend**:
   - Navegar al directorio `server`.
   - Ejecutar `yarn install` para instalar las dependencias.
   - Ejecutar `docker-compose up` para iniciar la base de datos y la aplicación.

2. **Frontend**:
   - Navegar al directorio `todo-client`.
   - Ejecutar `yarn install` para instalar las dependencias.
   - Ejecutar `ng serve` para iniciar el servidor de desarrollo.

## Funcionalidades Principales

### Autenticación de Usuarios

La aplicación implementa un sistema de autenticación de usuarios con JWT (JSON Web Tokens).

### Gestión de Tareas (To-Do)

El módulo de tareas permite a los usuarios crear, ver, actualizar y eliminar tareas. Cada tarea tiene un conjunto de propiedades, como descripción y estado.

## Pruebas

La aplicación está acompañada de pruebas unitarias y de extremo a extremo. Se utilizan Jest para el backend y Karma para el frontend.

## Contribución

La aplicación sigue un enfoque modular, lo que facilita la contribución y extensión. Cada módulo es independiente y puede ser mejorado o ampliado por separado.

---

Esta documentación proporciona una visión general de la estructura y las tecnologías utilizadas en la aplicación. Para detalles más específicos, se recomienda revisar los archivos individuales y la documentación interna de cada tecnología utilizada.