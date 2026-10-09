# Bot Hut

Sitio estático en español: [bothut.si](https://bothut.si)

**Lema:** Descubre lo que los bots pueden hacer por ti.

Bot Hut explica, para un público general de España, Latinoamérica y la comunidad hispana de EE. UU., qué puede hacer cada bot o agente personal, cuánto cuesta (en dólares de referencia) y si llega a tu país. No es para expertos. No hay cuentas ni base de datos.

Lo mantiene Asdrúbal Chirinos. El código es **MIT**; los textos son **CC BY 4.0**. Ver `LICENSE` y `LICENSE-CONTENIDO`.

## Cómo verlo en tu computadora

Necesitas [Node.js](https://nodejs.org/) 22 o superior.

```bash
git clone https://github.com/asdrubalchirinos/bothut.git
cd bothut
npm install
npm run dev
```

Abre la dirección que imprime el comando (casi siempre `http://localhost:4321`).

Otros comandos:

```bash
npm run build     # construye el sitio en la carpeta dist/
npm run preview   # sirve esa carpeta para revisarla
```

Si una ficha está incompleta, `npm run build` falla. Eso es a propósito.

## Cómo agregar una ficha

Lee [`CONTRIBUTING.md`](CONTRIBUTING.md). Copia [`plantillas/ficha.md`](plantillas/ficha.md) a `src/content/bots/` y llena todos los campos. También puedes [sugerir un bot con un issue](https://github.com/asdrubalchirinos/bothut/issues/new?template=sugerir-bot.yml).

## Publicar en GitHub Pages (una vez)

El flujo de GitHub Actions (`.github/workflows/deploy.yml`) construye el sitio y lo publica cuando algo llega a la rama `main`. Tú tienes que activar Pages **una vez**:

1. En GitHub, entra a **Settings → Pages**.
2. En **Build and deployment → Source**, elige **GitHub Actions** (no “Deploy from a branch”).
3. Cuando el flujo se haya ejecutado bien, el sitio queda en `https://asdrubalchirinos.github.io/bothut/` hasta que el dominio propio responda.

## Dominio bothut.si (una vez, en tu registrador)

El archivo `public/CNAME` ya dice `bothut.si`. Falta apuntar el DNS. IPs tomadas de la [documentación oficial de GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) el 9 de octubre de 2026.

En el registrador de `bothut.si` crea:

**Dominio raíz (`bothut.si`), registros A**

| Tipo | Nombre | Valor |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

**Dominio raíz, registros AAAA (IPv6).** GitHub recomienda ponerlos junto a los A:

| Tipo | Nombre | Valor |
|---|---|---|
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |

**www**

| Tipo | Nombre | Valor |
|---|---|---|
| CNAME | `www` | `asdrubalchirinos.github.io` |

Después, en **Settings → Pages → Custom domain**, escribe `bothut.si`, espera a que GitHub verifique el DNS y marca **Enforce HTTPS**. El certificado puede tardar unas horas.

Si tu registrador permite un registro ALIAS o ANAME del raíz hacia `asdrubalchirinos.github.io`, también sirve; los A y AAAA de arriba son el camino que documenta GitHub.

## Qué hay en este repositorio

| Carpeta o archivo | Para qué |
|---|---|
| `src/content/bots/` | Una ficha por bot (Markdown + datos) |
| `src/content/necesidades/` | Páginas de necesidades |
| `src/pages/` | Inicio, listados y páginas fijas |
| `src/content.config.ts` | El esquema: una ficha incompleta no se publica |
| `plantillas/ficha.md` | Modelo para un pull request |
| `.github/ISSUE_TEMPLATE/sugerir-bot.yml` | Formulario “Sugerir un bot” |

Hecho con [Astro 7.3.8](https://astro.build). Sitio estático, sin rastreadores.
