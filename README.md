# Jerry · web

Web estática de Jerry 4.1.2, el asistente de escritorio con voz y con equipo.

El lema es «Tu escritorio, con voz y con equipo». La palabra de activación es «oye Jerry». La cara por defecto es Saturn.

Esta página está en español. No tiene paso de compilación, ni cookies, ni rastreadores.

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

El archivo `.nojekyll` está en la raíz para que Pages publique los archivos tal cual, sin pasarlos por Jekyll. La página de error es `404.html`, también en la raíz.

## Archivos

- `index.html` — la página
- `estilos.css` — el estilo
- `galeria.js` — el visor de Saturn, sin dependencias
- `404.html`
- `img/` — sprite, marca y retratos
- `fonts/` — Inter, con su licencia en `fonts/OFL.txt`
- `LICENSE` — GPL-3.0-only
- `NOTICE` — avisos de Dodaios, de las caras de Sopa y de Inter

## El programa no se descarga desde aquí

El repositorio del producto es privado: <https://github.com/ardu01/jerry>

Los instaladores están, de momento, en la release privada. Quien tenga acceso los encuentra ahí. Esta web no publica una URL de descarga.

## Imágenes

Todas las que se ven son archivos reales del producto, salvo el WebP animado de Saturn, que sale del GIF.

- `img/jerry-faces.png` y `img/jerry-faces.webp`: la rejilla de las siete caras.
- `img/caras/*.webp`: el gesto de reposo, recortado de esa rejilla.
- `img/jerry-mark.png`: la marca original, con fondo blanco.
- `img/marca.webp`: la misma marca, con el fondo blanco retirado, para la cabecera oscura.
- `img/live-ui.png` y `img/live-ui.webp`: captura real del paso del nombre.
- `img/jerry-saturn.gif`: el sprite original.
- `img/jerry-saturn.webp`: el mismo sprite, sin un fotograma dañado y con el fondo oscuro retirado.
- `img/saturn-quieto.webp`: un fotograma en reposo, para quien pide menos movimiento.
- `img/desktop-with-jerry.png` está en el repositorio y no se enlaza: el escritorio sale lleno (varias ventanas, la barra de tareas) y no aporta a la galería.

## Licencia

El texto y el código de esta web son GPL-3.0-only. Copyright (C) 2026 Miguel Rodríguez Saiz / ArduSolutions.

Jerry, el programa, es GPL-3.0-only. Deriva de Dodaios (Apache-2.0: el aviso se conserva en el repositorio del producto) y usa las caras de Sopa (GPL). Esta web no usa los materiales de marca de Dodaios.

Inter va bajo la SIL Open Font License 1.1.
