# Jerry

Asistente de escritorio con voz y con equipo. La palabra de activación es «oye Jerry». Siete agentes —Saturn, Sprout, Circuit, Mirage, Alloy, Proton y Volt— trabajan en el ordenador con modelos locales, sin cuenta intermedia en la nube.

Versión que describe esta página: **4.1.2**. El repositorio del programa es privado ([github.com/ardu01/jerry](https://github.com/ardu01/jerry)) y no hay descarga pública. Esta web no publica un instalador.

Web estática, en español, sin paso de compilación, sin cookies y sin rastreadores. El texto y el código de la página son GPL-3.0-only.

Texto corto, por si hace falta en About:

> Asistente de escritorio con voz y con equipo. Palabra: «oye Jerry». Siete agentes, modelos locales, sin cuenta en la nube. Versión 4.1.2. El programa está en un repositorio privado; esta página no reparte el instalador.

## Verla en local

Abre `index.html` en el navegador, o sirve la carpeta:

```bash
python3 -m http.server 8080
```

Luego entra en `http://127.0.0.1:8080/`.

## GitHub Pages

En el repositorio: Settings → Pages → Build and deployment → Source: **Deploy from a branch**.

- Branch: `main`
- Folder: `/ (root)`

El archivo `.nojekyll` está en la raíz para que Pages publique los archivos tal cual, sin pasarlos por Jekyll. La página de error es `404.html`, también en la raíz. La dirección prevista es <https://ardu01.github.io/jerry-web/>.

## Archivos

- `index.html` — la página
- `estilos.css` — el estilo
- `galeria.js` — el visor de imágenes, sin dependencias
- `404.html`
- `img/` — captura, caras, marca y tarjeta social
- `fonts/` — Inter, con su licencia en `fonts/OFL.txt`
- `LICENSE` — GPL-3.0-only
- `NOTICE` — avisos de Dodaios, de las caras de Sopa y de Inter

## El programa no se descarga desde aquí

El repositorio del producto es privado: <https://github.com/ardu01/jerry>

Los instaladores están en la release privada. Quien tenga acceso los encuentra ahí. Esta web no publica una URL de descarga.

## Imágenes

Lo que se ve sale de archivos reales del producto.

- `img/capturas/*.webp`: capturas de la interfaz real de Jerry 4.1.2 (commit `2dc1079` de `ardu01/jerry`), en español, en modo oscuro y claro. Se hicieron el 5 de noviembre de 2026 arrancando la interfaz web del programa en Linux en modo servidor, con la interfaz compilada, y fotografiándola con Chromium sin ventana, a 2880×1800. Cada una tiene su versión grande (1600×1000) y una miniatura (`-mini`, 720×450).
- Las conversaciones de las capturas son de ejemplo: se escribieron en el almacén de chats del programa (`agent_chat.db`) y la interfaz las muestra como cualquier otro chat. El modelo del selector (`gpt-oss-20b`) apuntaba a un servidor local de pruebas.
- `img/og.png`: tarjeta de 1200×630, recortada de la captura de Descargas.
- `img/mascotas/*.webp`: las 21 caras de Sopa animadas (reposo, escuchando, hablando y cuando sale bien), sacadas de las `sheet.png` del programa. `*-quieto.webp` es el primer fotograma, para quien pide menos movimiento.
- `img/mascotas/estados/*.webp`: los diez estados de Saturn, uno por fila de su hoja.
- `img/jerry-faces.png` y `img/jerry-faces.webp`: la rejilla de las siete caras de los agentes.
- `img/caras/*.webp`: el gesto de reposo, recortado de esa rejilla.
- `img/marca.webp`: la marca, con el fondo blanco retirado, para la cabecera oscura.
- `img/saturn-quieto.webp`: Saturn en reposo, para la portada.

La mascota flotando sobre el escritorio no tiene captura: es una ventana nativa aparte y no se puede fotografiar desde el navegador.

## Licencia

El texto y el código de esta web son GPL-3.0-only. Copyright (C) 2026 Miguel Rodríguez Saiz / ArduSolutions.

Jerry, el programa, es GPL-3.0-only. Deriva de Dodaios (Apache-2.0: el aviso se conserva en el repositorio del producto) y usa las caras de Sopa (GPL). Esta web no usa los materiales de marca de Dodaios.

Inter va bajo la SIL Open Font License 1.1.
