# 🛒 E-commerce App

Aplicación de e-commerce desarrollada con **React** en el frontend y una **API propia en Node.js** para el backend.

---

## 🚀 Características

* 🔐 Autenticación de usuarios (Login / Register)
* 🛍️ Visualización de productos desde API propia
* 🛒 Carrito de compras (en desarrollo)
* 🧑‍💼 Panel de administración (en desarrollo)
* 📦 Consumo de API REST
* 🔄 Arquitectura modular por features

---

## 🧱 Tecnologías utilizadas

### Frontend

* React
* React Router DOM
* Axios
* React Hook Form

### Backend

* Node.js
* Express
* Sequelize
* PostgreSQL

---

## 📁 Estructura del proyecto (Frontend)

```
src/
│
├── services/        # Axios y manejo de token
├── features/        # Lógica por funcionalidad
│   ├── auth/
│   └── products/
├── pages/           # Vistas principales
├── components/      # Componentes reutilizables
├── routes/          # Configuración de rutas
├── layouts/         # Layouts (Navbar, etc.)
```

---

## 🔑 Autenticación

El sistema de autenticación funciona mediante tokens:

* El usuario inicia sesión
* Se recibe un token desde el backend
* El token se guarda en localStorage
* Se utiliza para futuras peticiones protegidas

---

## 📡 API

Este proyecto consume una API propia con endpoints como:

* `POST /auth/login`
* `POST /auth/register`
* `GET /products`

---

## ⚙️ Instalación

1. Clonar el repositorio:

```
git clone <tu-repositorio>
```

2. Instalar dependencias:

```
npm install
```

3. Crear archivo `.env`:

```
VITE_API_URL=http://localhost:3000/api
```

4. Ejecutar el proyecto:

```
npm run dev
```

---

## 📌 Estado del proyecto

🚧 En desarrollo

Actualmente incluye:

* Login funcional
* Consumo de productos desde API
* Estructura modular profesional

---

## 🎯 Próximas mejoras

* 🔐 Rutas protegidas (PrivateRoute)
* 🧑‍💼 Panel de administrador
* ➕ Crear productos (CRUD)
* 🛒 Implementación de carrito
* 💳 Checkout

---

## 🌐 Demo (opcional)

```
....
```

---

## 👨‍💻 Autor

Desarrollado por Julio Cesar

---

## 📄 Licencia

Proyecto con fines educativos y de portafolio.
