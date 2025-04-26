# Proyecto Frontend - CRUD Usuarios y Productos

Este proyecto es un frontend hecho en **React** que consume una API creada en **Flask**.

La API está disponible en: [https://52.91.72.15](https://52.91.72.15)

## Tecnologías

- React
- Axios
- React Router DOM
- Flask (backend)

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
Instala dependencias:

bash
Copiar
Editar
npm install
Corre el proyecto:

bash
Copiar
Editar
npm start
Uso
Login: Permite iniciar sesión.

Usuarios: CRUD completo (Crear, Leer, Actualizar, Borrar).

Productos: CRUD con opción de búsqueda por nombre y categoría.

Estructura del proyecto
css
Copiar
Editar
src/
├── components/
│   ├── ProductForm.jsx
│   ├── UserForm.jsx
│   └── SearchBar.jsx
├── pages/
│   ├── Login.jsx
│   ├── Users.jsx
│   └── Products.jsx
├── services/
│   └── api.js
├── App.jsx
└── main.jsx
Notas
-El servidor tiene un certificado autofirmado, por lo que debes aceptar el sitio manualmente en el navegador.
-No requiere configuración adicional de SSL en el frontend.
Autor
MIGUEL ANGEL GARCIA VIDAL
