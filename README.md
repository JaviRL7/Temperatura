# ☀️ Mi Portfolio y App del Clima
    2
    3 ¡Bienvenido a mi aplicación personal! Este proyecto combina una pequeña sección de portfolio
      con una aplicación interactiva del clima, todo diseñado con un estilo moderno y "cute".
    4
    5 ## ✨ Características
    6
    7 *   **Información Personal:** Muestra mi nombre (Javier Rodriguez Lopez), rol, enlaces a
      LinkedIn, correo electrónico y opciones para descargar mi CV en español e inglés.
    8 *   **Foto de Perfil:** Una foto personal integrada en la sección de información.
    9 *   **App del Clima:**
   10     *   Consulta el clima actual de cualquier ciudad usando la API de OpenWeatherMap.
   11     *   **Fondo Dinámico:** El color de fondo de la aplicación cambia sutilmente según la
      temperatura (tonos pastel de rojo, naranja, verde y azul).
   12     *   **Advertencia de Calor:** Muestra un mensaje de precaución si la temperatura supera los
      40°C.
   13 *   **Separador Animado:** Un sutil punto animado que se mueve verticalmente, separando
      visualmente las dos secciones principales.
   14 *   **Diseño Responsivo:** Adaptado para verse bien tanto en dispositivos móviles como en
      pantallas de escritorio.
   15 *   **Estilo "Pastel Dream":** Una estética visual suave y agradable, con tipografía Poppins.
   16
   17 ## 🚀 Tecnologías Utilizadas
   18
   19 *   **React:** Biblioteca de JavaScript para construir interfaces de usuario.
   20 *   **Vite:** Herramienta de construcción rápida para proyectos web.
   21 *   **TypeScript:** JavaScript con tipado estático.
   22 *   **Tailwind CSS:** Framework CSS para un desarrollo rápido y flexible.
   23 *   **Axios:** Cliente HTTP para realizar peticiones a la API de OpenWeatherMap.
   24 *   **React Icons:** Librería de iconos para integrar fácilmente iconos SVG.
   25
   26 ## 🛠️ Configuración y Ejecución
   27
   28 1.  **Clona el repositorio:**

      git clone https://github.com/JaviRL7/Temperatura.git
      cd Temperatura

   1 2.  **Instala las dependencias:**

      npm install


   ... first 3 lines hidden ...
      con una aplicación interactiva del clima, todo diseñado con un estilo moderno y "cute".
    4

   1 3.  **Configura tu API Key de OpenWeatherMap:**
   2     *   Crea un archivo `.env.local` en la raíz del proyecto.
   3     *   Añade tu clave de API de OpenWeatherMap de la siguiente manera:

          VITE_OPENWEATHERMAP_API_KEY="TU_API_KEY_AQUI"


   1         (Reemplaza `TU_API_KEY_AQUI` con tu clave real).
   2 4.  **Coloca tus archivos personales:**
   3     *   Asegúrate de que tu foto de perfil (`foto1.jpeg`) y tus CVs (`cv_javier_es.pdf`,
     `cv_javier_en.pdf`) estén en la carpeta `public/`.
   4 5.  **Inicia la aplicación:**

      npm run dev


   1
   2 ¡La aplicación se abrirá en tu navegador (normalmente en `http://localhost:5173`)!
