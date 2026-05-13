¡Bienvenido a sushi-app! Esta es una aplicación web responsiva diseñada para llevar la cuenta de cuántas piezas de sushi (y otros platos) consumes durante una cena, permitiéndote comparar tu resultado final con el de un rival.

Desarrollada bajo el patrón de diseño **Modelo-Vista-Controlador (MVC)** para garantizar un código limpio, escalable y fácil de mantener a futuro.

## Características

* **Contadores Independientes:** Incrementa piezas de sushi y "otras piezas" por separado.
* **Cómputo Total:** Cálculo automático de la suma de ambos contadores.
* **Modo Batalla:** Compara tus resultados con los de otra persona para ver quién ha comido más.
* **Validación de Datos:** Protección contra errores (como introducir números negativos).
* **Diseño Responsivo:** Optimizado para su uso en dispositivos móviles y ordenadores.

## Tecnologías Utilizadas

* **HTML5:** Estructura semántica.
* **CSS3:** Diseño moderno con Flexbox y variables CSS (Custom Properties).
* **JavaScript (Vanilla):** Lógica de programación siguiendo el patrón **MVC**.

## Estructura del Proyecto

```text
/
├── fotos/            # Carpeta para recursos visuales (imágenes de sushi)
├── index.html        # La Vista (Estructura del DOM)
├── style.css         # El Diseño (Estilos visuales)
├── script.js         # El Modelo y Controlador (Lógica de la app)
├── LICENSE           # Licencia MIT
└── README.md         # Documentación del proyecto
