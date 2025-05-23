# Laboratorio: Desarrollo de un Portal de E-commerce para Productos Artesanales

## Objetivos del Laboratorio
1. Planificar y analizar los requerimientos necesarios para desarrollar un portal de e-commerce funcional y atractivo.
2. Diseñar interfaces de usuario intuitivas que faciliten la experiencia de compra.
3. Implementar el frontend y backend simulado del portal utilizando las tecnologías vistas en el curso.
4. Promover el trabajo en equipo mediante la integración con Git y GitHub.
5. Aplicar metodologías de prueba y ajuste para garantizar la calidad del producto final.
6. Publicar un portal completamente funcional que cumpla con los requerimientos definidos.

## Materiales Necesarios
1. Computadora con conexión a internet.
2. Editor de Código de preferencia (Visual Studio Code, Sublime Text, Atom, etc.).
3. Navegador web (Google Chrome, Mozilla Firefox, etc.).
4. Cuenta en GitHub (opcional, para publicación).

## Introducción
Este laboratorio consiste en el desarrollo de un portal de e-commerce para la comercialización de productos artesanales. El proyecto se divide en múltiples etapas, cada una diseñada para reforzar diferentes competencias técnicas y de colaboración. Desde la planificación inicial hasta la publicación del portal, los estudiantes trabajarán en equipo utilizando metodologías ágiles y herramientas de desarrollo colaborativo como Git y GitHub.

El enfoque principal es aplicar los conocimientos adquiridos en los módulos del curso, integrando habilidades de frontend, backend simulado, diseño de interfaces, y pruebas. El resultado esperado es un portal funcional que permita gestionar productos, realizar compras en línea, y proporcionar una experiencia de usuario eficiente.

## Cronograma de Trabajo y Retos

### Reto 1: Planificación y análisis de requerimientos, diseño de interfaz (5 horas)
- Realizar análisis y planificación de requerimientos.
- Realizar el diseño de la interfaz en Figma.

### Reto 2: Integración con Git y GitHub, trabajo en equipo (5 horas)
- Vincular el Proyecto con un repositorio de GitHub.
- Crear la estructura de carpetas del proyecto.

### Retos 3-6: Desarrollo del frontend (12 horas)
- Realizar la estructura inicial del e-commerce.
- Integrar Bootstrap para maquetación rápida.
- Crear el encabezado, pie de página y páginas complementarias (compras, acerca de, productos y contacto).

### Retos 7-8: Desarrollo del backend simulado (6 horas)
- Crear la lógica funcional del proyecto.
- Crear el código fuente del carrito de compras y gestión de productos en JavaScript.
- Crear el código complementario de funcionalidades básicas del e-commerce en JavaScript (ejemplo: contador de visitas y contador de productos).

### Reto 9: Aplicación de tecnologías vistas en el curso (1 hora)
- Integrar todas las tecnologías vistas en el desarrollo del Bootcamp para validar el correcto funcionamiento de la lógica implementada.
- Validar la creación de la lógica del carrito de compras.

### Reto 10: Pruebas, ajustes y publicación (1 hora)
- Revisión general del proyecto.
- Validación de los requerimientos e interfaces de usuario.
- Pruebas a fondo del e-commerce.
- Despliegue en GitHub Pages.

## Resultados Esperados
1. Planificación y diseño estructurado:
   - Documentación detallada de requerimientos.
   - Wireframes aprobados por el equipo.
2. Frontend desarrollado:
   - Interfaces funcionales y estilizadas según los wireframes.
   - Uso adecuado de tecnologías de frontend.
3. Backend simulado:
   - Creación de la lógica necesaria para el funcionamiento correcto del e-commerce.
   - Uso adecuado de la lógica aprendida.
4. Integración y colaboración exitosa:
   - Repositorios organizados y actualizados en GitHub.
   - Evidencia de commits frecuentes y colaboración entre los miembros del equipo.
5. Producto final publicado:
   - Portal funcional alojado en un servidor o plataforma en línea.
   - Documentación del proceso de desarrollo.
6. Pruebas realizadas:
   - Registro de errores corregidos.
   - Ajustes implementados en función de las pruebas.

### Validación de la creación del carrito de compras y gestión de productos

Se implementó exitosamente el carrito de compras y la gestión de productos en JavaScript, cumpliendo con los retos 7-8 del laboratorio:

- **Gestión de productos:**
  - Los productos se definen en un array de objetos en el archivo `src/assets/js/main.js`.
  - Cada producto contiene id, nombre, precio, imagen y descripción.
  - El renderizado de productos y productos destacados se realiza dinámicamente en las páginas correspondientes.

- **Carrito de compras:**
  - Permite agregar, eliminar y modificar la cantidad de productos.
  - El estado del carrito se guarda en `localStorage` para persistencia entre sesiones.
  - El usuario puede ver el total y modificar su compra antes de finalizar.
  - El contador de productos en el carrito se muestra en la barra de navegación.
  - Se incluye una notificación visual al agregar productos.

- **Funcionalidades adicionales:**
  - Se implementó un contador de visitas que se muestra en todas las páginas.

Todo el código fuente se encuentra en `src/assets/js/main.js` y ha sido probado en las páginas del portal, validando su correcto funcionamiento y la experiencia de usuario esperada.

### Validación de la integración y funcionamiento del carrito de compras (Reto 9)

Se realizó la integración de todas las tecnologías vistas en el curso, validando el correcto funcionamiento de la lógica implementada en el portal:

- El carrito de compras funciona correctamente en todas las páginas, permitiendo agregar, eliminar y modificar productos.
- La persistencia de datos se mantiene gracias al uso de localStorage.
- El contador de productos y la notificación visual funcionan en tiempo real.
- El código JavaScript está modularizado y documentado en `src/assets/js/main.js`.
- Se realizaron pruebas de usuario para validar la experiencia de compra y la gestión de productos.

Con esto, se cumple el Reto 9 y se garantiza que la lógica del carrito de compras y la integración de tecnologías es robusta y funcional.

---
