# Examen CSS Flex (2 horas)

El equipo de desarrollo de TechCourses Inc. estaba a punto de presentar su nueva web de cursos… pero anoche, durante una misteriosa brecha de seguridad, ¡alguien robó el archivo styles.css! 
Lo único que ha sobrevivido es el archivo index.html, intacto y perfectamente estructurado.
Tu misión es reconstruir el diseño original desde cero usando Flexbox, Font Awesome y media queries, para que la web vuelva a la vida antes de la presentación oficial.

Objetivo
Recrear el diseño de la landing “Tech Courses” usando Flexbox como sistema de maquetación principal, integrando iconos de Font Awesome, estilos modernos y una versión responsive que funcione correctamente en pantallas pequeñas.

Requisitos técnicos
Solo puedes crear el archivo styles.css.
No se permite alterar el HTML (estructura, clases ni etiquetas).
Debes usar Flexbox para todas las maquetaciones principales.
Debe incluir una media query (por ejemplo, a max-width: 768px).
Font Awesome ya está disponible en el HTML.
Se valorará el código limpio


Tareas
1. Header (barra superior)
   - Logo a la izquierda y navegación a la derecha en una sola fila con Flexbox.
   - El menú debe tener un “hamburguesa” (icono) visible solo en móvil y el menú horizontal oculto en móvil.
2. Hero (portada)
   - Dos columnas: texto (izquierda) y una imagen o bloque decorativo (derecha).
3. Sección de cursos (cards)  
   - Contenedor flexible con `flex-wrap`.
   - Cada card debe tener: icono, título, descripción y un botón.
   - En pantallas grandes se ven 3 tarjetas en fila y 1 en móvil.
4. Sección de “beneficios” (icon list)
   - Lista horizontal con iconos (3 ítems) usando Flexbox y `gap`.
5. Footer
   - Dos columnas: info de contacto y redes sociales (iconos FA). En móvil, en columna.
6. Media query  
   - Rompe el diseño a ≤ 768px (o 700px). Cambia direcciones, apila secciones, muestra hamburguesa, oculta menú horizontal.
7. Interacción
   - Añade efecto hover en los botones, mostrando coherencia con los colores corporativos.

Entregables
- Entrega sólo el archivo css, incluyendo tu nombre en el nombre del archivo (nombre-apellido-style.css)

Evaluación
- Header + nav responsive (2 pt)
- Hero a dos columnas con botones e iconos (2 pt)
- Grid de cards con wrap y puntos de corte (3 pt)
- Icon list con Flexbox (1 pt)
- Media query funcional (1 pt)
- Código limpio + accesibilidad básica (1 pt)
