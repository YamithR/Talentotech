# Instrucciones para la Integración con Git y GitHub

## 1. Crear el Repositorio en GitHub
- Accede a tu cuenta de GitHub y crea un nuevo repositorio llamado `ecommerce-artesanal` (o nombre acordado por el equipo).
- Añade una breve descripción y selecciona la opción de añadir un archivo README.

## 2. Clonar el Repositorio en Local
- Copia la URL del repositorio y clónalo en tu computadora usando:
  ```
  git clone <URL-del-repositorio>
  ```

## 3. Estructura de Carpetas
- Copia la estructura de carpetas y archivos creada en la carpeta `Tema7` al repositorio local.
- Asegúrate de incluir:
  - `/src/assets/img/`
  - `/src/assets/css/`
  - `/src/assets/js/`
  - `/src/components/`
  - `/src/pages/`
  - `/docs/`
  - `README.md`
  - `estructura.md`

## 4. Primer Commit y Push
- Realiza el primer commit con la estructura base:
  ```
  git add .
  git commit -m "Estructura inicial del proyecto de e-commerce artesanal"
  git push origin main
  ```

## 5. Colaboración en Equipo
- Cada miembro debe clonar el repositorio y trabajar en ramas separadas para cada funcionalidad o reto.
- Realizar commits frecuentes y descriptivos.
- Usar Pull Requests para integrar cambios y revisiones de código.

## 6. Buenas Prácticas
- Mantener la rama `main` siempre funcional.
- Documentar cambios importantes en el README o en la carpeta `docs/`.
- Sincronizar frecuentemente con la rama principal para evitar conflictos.

---

> **Nota:** Adjuntar capturas de pantalla o enlaces al repositorio en este documento como evidencia de la integración y colaboración.
