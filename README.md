# 📄 Gestión Documentaria

---

## 📌 Introducción

Este proyecto consiste en el desarrollo de un sistema web que permite la **gestión de documentos digitales** (PDF y Word) mediante una interfaz desarrollada con **React** en el frontend y **Node.js** en el backend. Utiliza **MongoDB** como base de datos para almacenar la información de los documentos.

---

## 👤 Actores dentro del sistema

- **Administrador:**  
  Tiene acceso total al módulo. Puede subir, visualizar, buscar y eliminar documentos.

- **Asistente:**  
  Tiene acceso restringido. Solo puede subir, visualizar y buscar documentos.

---

## 🧩 Funciones principales del sistema

### 📤 Subida de documentos

Formulario con los siguientes campos:
- Título del documento (obligatorio)
- Descripción (opcional)
- Fecha de publicación (día/mes/año)
- Archivo (formatos permitidos: `.pdf`, `.doc`)

### 📑 Visualización de documentos

- Tabla con la lista de documentos disponibles
- Vista previa en ventana flotante o externa
- Opción de descarga directa

### 🔍 Paginación y buscador

- Navegación por páginas para ver documentos almacenados
- Barra de búsqueda por título o palabra clave

---

## 🛠️ Tecnologías Utilizadas

| Tipo        | Tecnología |
|-------------|------------|
| Frontend    | React, HTML, CSS, JavaScript |
| Backend     | Node.js, Express |
| Base de Datos | MongoDB, Mongoose |
| Otros       | Axios, Dotenv, Multer |

### 📘 ¿Qué es React?

**React** es una biblioteca de JavaScript desarrollada por Facebook para construir interfaces de usuario interactivas. Permite crear componentes reutilizables, facilita el manejo del estado y mejora la experiencia del usuario mediante actualizaciones dinámicas del contenido.

### 🍃 ¿Qué es MongoDB?

**MongoDB** es una base de datos NoSQL orientada a documentos. Almacena los datos en formato BSON (similar a JSON), lo que facilita la escalabilidad, flexibilidad y velocidad para aplicaciones modernas.

---

## 🔁 Flujo de Datos

Este es el recorrido que sigue un documento en el sistema:

1. El usuario llena el formulario y selecciona un archivo.
2. El frontend envía los datos al backend (Node.js).
3. El backend guarda el archivo en el servidor y los metadatos en MongoDB.
4. El documento queda disponible para:
   - Vista previa
   - Descarga
   - Búsqueda
   - Eliminación (solo administrador)


---
## 🧱 Crear la Base de Datos

### MongoDB

Ejecuta los siguientes comandos en la consola de MongoDB:
```
bash

use documentosbd
db.createCollection("documents")
```
##🚀 Ejecución del Proyecto
####📦 Instalación general
Ejecuta este comando en la raíz del proyecto para instalar dependencias generales:

```
bash

npm install
```
###🔧 Backend
```
bash

npm install
npm install dotenv
node app.js
```
###💻 Frontend
```
bash

npm install
npm start
```

## 🖼️ Imágenes

### MongoDB

![MongoDB Logo](https://www.mongodb.com/assets/images/global/leaf.png)

### React

![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)

---



 -  Creador del readme ("readme Luis Alberto ")

