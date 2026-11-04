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

Lo que se ve sale de archivos reales del producto. El WebP animado de Saturn sale del GIF.

- `img/live-ui.png` y `img/live-ui.webp`: ventana real de Jerry en el paso del nombre. El campo dice «Oye Jerry». Detrás del cuadro se ven la barra lateral y el campo de escritura. El PNG es la captura original; el WebP es el mismo archivo, recomprimido para que el texto se lea.
- `img/og.png`: tarjeta de 1200×630. A la izquierda, el nombre y el lema. A la derecha, esa misma captura.
- `img/jerry-faces.png` y `img/jerry-faces.webp`: la rejilla de las siete caras.
- `img/caras/*.webp`: el gesto de reposo, recortado de esa rejilla.
- `img/marca.webp`: la marca, con el fondo blanco retirado, para la cabecera oscura.
- `img/jerry-saturn.gif`: el sprite original.
- `img/jerry-saturn.webp`: el mismo sprite, sin un fotograma dañado y con el fondo oscuro retirado.
- `img/saturn-quieto.webp`: un fotograma en reposo, para la portada y para quien pide menos movimiento.

No hay un recorte aparte de la ventana: el encuadre original ya es la propia ventana, y recortarlo unos píxeles no aportaba.

## Captura en Linux

No se pudo hacer una captura nueva en esta máquina.

La release `jerry-installer-4.1.2` del repositorio privado guarda `Jerry-Linux-x86_64.AppImage`. La credencial de este entorno solo alcanza `ardu01/jerry-web`. La API de GitHub responde 404 en `ardu01/jerry`, y `git ls-remote` dice «Repository not found». Sin el AppImage no se puede abrir el programa, pasar el asistente en español y fotografiar el chat ya abierto.

La imagen que lleva la portada es la captura real que ya estaba en el repositorio: la ventana de Jerry, no el escritorio de Windows. La foto del escritorio, con otras ventanas y la barra de tareas, no se publica. Tampoco se ha dibujado una interfaz.

## Licencia

El texto y el código de esta web son GPL-3.0-only. Copyright (C) 2026 Miguel Rodríguez Saiz / ArduSolutions.

Jerry, el programa, es GPL-3.0-only. Deriva de Dodaios (Apache-2.0: el aviso se conserva en el repositorio del producto) y usa las caras de Sopa (GPL). Esta web no usa los materiales de marca de Dodaios.

Inter va bajo la SIL Open Font License 1.1.
