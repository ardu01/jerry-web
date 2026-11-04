(function () {
  var nodos = Array.prototype.slice.call(document.querySelectorAll("[data-visor]"));
  if (!nodos.length || typeof HTMLDialogElement === "undefined") return;

  var dlg = document.createElement("dialog");
  dlg.className = "visor";
  dlg.innerHTML =
    '<button type="button" class="v-cerrar" aria-label="Cerrar">×</button>' +
    '<button type="button" class="v-ant" aria-label="Anterior">‹</button>' +
    '<figure><img alt=""><figcaption></figcaption></figure>' +
    '<button type="button" class="v-sig" aria-label="Siguiente">›</button>';
  document.body.appendChild(dlg);

  var img = dlg.querySelector("img");
  var cap = dlg.querySelector("figcaption");
  var anterior = dlg.querySelector(".v-ant");
  var siguiente = dlg.querySelector(".v-sig");
  var indice = 0;
  var origen = null;
  var reducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function datos(nodo) {
    var foto = nodo.querySelector("img:not(.cara-quieto)") || nodo.querySelector("img");
    var quieto = nodo.querySelector(".cara-quieto");
    var elegido = reducido && quieto ? quieto : foto;
    return {
      src: (elegido && (elegido.currentSrc || elegido.src)) || nodo.href,
      alt: (elegido && elegido.alt) || ""
    };
  }

  function unicos() {
    var vistos = {};
    var n = 0;
    nodos.forEach(function (nodo) {
      var src = datos(nodo).src;
      if (!vistos[src]) {
        vistos[src] = true;
        n += 1;
      }
    });
    return n;
  }

  function pintar(i) {
    indice = (i + nodos.length) % nodos.length;
    var d = datos(nodos[indice]);
    img.src = d.src;
    img.alt = d.alt;
    cap.textContent = d.alt;
  }

  function abrir(i, desde) {
    origen = desde;
    var varios = unicos() > 1;
    anterior.hidden = !varios;
    siguiente.hidden = !varios;
    pintar(i);
    dlg.showModal();
    dlg.querySelector(".v-cerrar").focus();
  }

  nodos.forEach(function (nodo, i) {
    nodo.addEventListener("click", function (evento) {
      evento.preventDefault();
      abrir(i, nodo);
    });
  });

  dlg.querySelector(".v-cerrar").addEventListener("click", function () { dlg.close(); });
  anterior.addEventListener("click", function () { pintar(indice - 1); });
  siguiente.addEventListener("click", function () { pintar(indice + 1); });
  dlg.addEventListener("click", function (evento) {
    if (evento.target === dlg) dlg.close();
  });
  dlg.addEventListener("close", function () {
    if (origen) origen.focus();
  });
  dlg.addEventListener("keydown", function (evento) {
    if (evento.key === "ArrowLeft") pintar(indice - 1);
    if (evento.key === "ArrowRight") pintar(indice + 1);
  });
})();
