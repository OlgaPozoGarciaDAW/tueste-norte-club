# Tueste Norte Club ☕

Prototipo del área privada para los socios del Club Tueste Norte. Desarrollado con Next.js, React, TypeScript y Tailwind CSS.

## Características

- Dashboard del socio con resumen de su suscripción.
- Selector interactivo para cambiar el número de bolsas y actualizar el precio.
- Catálogo de los cafés del mes.
- Fichas individuales de cada café.
- Página 404 para cafés que no existen.
- Diseño responsive para móviles, tabletas y ordenadores.
- Componentes reutilizables y navegación mediante Next.js.

## Tecnologías

- Next.js con App Router.
- React.
- TypeScript.
- Tailwind CSS.
- Node.js y npm.

## Instalación y ejecución

Clonar el repositorio:

```bash
git clone https://github.com/OlgaPozoGarciaDAW/tueste-norte-club.git
```

Acceder a la carpeta del proyecto:

```bash
cd tueste-norte-club
```

Instalar las dependencias:

```bash
npm install
```

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## Organización del proyecto

- `src/app/`: páginas y rutas de la aplicación.
- `src/app/components/`: componentes reutilizables.
- `src/app/data/`: datos simulados de los cafés.
- `src/app/cafes/`: catálogo y fichas individuales de los cafés.
- `src/app/metodos/`: ejercicio de rutas y páginas dinámicas.
- `src/app/entradas/`: ejercicio de conexión con WordPress.
- `src/app/globals.css`: estilos globales.

## Fuente de datos

El catálogo utiliza un módulo TypeScript con datos simulados (`src/app/data/cafes.ts`). Se ha elegido esta opción porque el encargo permite utilizar datos simulados y el objetivo es mostrar el funcionamiento del área privada sin depender de WordPress.

Los datos del socio y de su suscripción también son simulados.

La ruta `/entradas` utiliza la API REST de WordPress para recuperar las publicaciones. Para probar esta funcionalidad es necesario tener WordPress funcionando localmente mediante XAMPP.

## Componentes de React

`EtiquetaTueste` es un Server Component porque únicamente recibe el nivel de tueste mediante props y muestra una etiqueta. No necesita interactividad.

`BotonFavorito` es un Client Component porque utiliza `useState` para alternar entre añadir y quitar un café de favoritos.

`SelectorBolsas` también es un Client Component porque necesita gestionar el estado del número de bolsas y actualizar el precio al interactuar con el usuario.

## Ejercicios

Los ejercicios de la semana 6 se encuentran dentro de las rutas de la aplicación:

- **Ejercicio 1:** componentes `EtiquetaTueste` y `BotonFavorito`, utilizados en la aplicación.
- **Ejercicio 2:** rutas `/metodos` y `/metodos/[slug]`, con navegación dinámica y gestión de rutas inexistentes.
- **Ejercicio 3:** ruta `/entradas`, con `loading.tsx` y `error.tsx` para controlar la carga y los errores de WordPress.

## Rutas del Club Tueste Norte

- `/`: dashboard del socio.
- `/cafes`: catálogo de cafés.
- `/cafes/[slug]`: ficha individual de cada café.

## Alcance del prototipo

Esta versión es una demostración visual. No incluye autenticación real, persistencia de cambios en una base de datos ni procesamiento de pagos. Estas funcionalidades se incorporarán en fases posteriores del proyecto.