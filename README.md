# CRUD de tareas

En este proyecto realizamos una API para gestionar una aplicación de tareas.

## Teconologias utilizadas

* Node.js

* Express

* Express validator

* Mongoose

## Instalación

### Requisitos previos

* Node.js

### Instrucciones

* **Clonar** este repositorio

* **Navegar** a la carpeta desde la consola

* **Instalar** las dependencias del proyecto

* **Iniciar** el servidor

## API Endpoints

### Crear una tarea

* **url** '/api/tasks'

* Método 'POST'

* Cuerpo de la petición
    {
      "title":"Nueva tarea",
      "description":"Descripción de la tarea",
      "isComplete":"True or False"
    }

### Obtener todas las tareas

* **url** '/api/tasks'

* Método 'GET'

### Obtener tarea por id

* **url** '/api/tasks/:id

* Método 'GET'

### Actualizar una tarea

* **url** '/api/tasks/:id'

* Método 'PUT'

* Cuerpo de la petición
    {
      "title":"Nueva tarea",
      "description":"Descripción de la tarea",
      "isComplete":"True or False"
    }

### Eliminar una tarea

* **url** '/api/tasks/:id'

* Método 'DELETE'

