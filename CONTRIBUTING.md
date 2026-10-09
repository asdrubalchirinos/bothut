# Cómo contribuir a Bot Hut

Gracias por querer sumar. Este sitio es un directorio en español de bots y agentes personales. No es un ranking de marcas.

Hay dos caminos:

1. **Sugerir un bot** con un [formulario de GitHub](https://github.com/asdrubalchirinos/bothut/issues/new?template=sugerir-bot.yml) (cuenta gratis). El mantenedor revisa y, si encaja, escribe o pide la ficha.
2. **Abrir un pull request** con una ficha nueva, copiando [`plantillas/ficha.md`](plantillas/ficha.md).

## Reglas (valen para issues y pull requests)

- **Información comprobable.** Cada dato de precio, país o permiso debe tener una fuente oficial o, si no existe, la frase “no se pudo verificar”.
- **Fuentes.** Enlaces reales, a ser posible del sitio o de la ayuda del producto. No uses recortes de redes sin fecha.
- **Fecha de revisión.** El campo `revisado` es el día en que miraste las fuentes, en formato `AAAA-MM-DD`.
- **Sin promoción escondida.** Nada de enlaces de afiliado, cupones ni “este es el mejor” sin explicar por qué. Di también para qué *no* sirve el bot.
- **Español neutro.** De tú, sin modismos de un solo país. Explica las palabras técnicas la primera vez.
- **El mantenedor decide** qué se publica, el orden de las recomendaciones y cuándo se actualiza una ficha.

## Cómo agregar una ficha (pull request)

1. Instala [Node.js](https://nodejs.org/) (versión 22 o superior) y [git](https://git-scm.com/).
2. Haz un *fork* del repositorio y clónalo en tu computadora.
3. Copia `plantillas/ficha.md` a `src/content/bots/nombre-del-bot.md`. El nombre del archivo es la dirección: `gemini.md` → `/bots/gemini/`.
4. Llena **todos** los campos de arriba (el bloque entre `---`). Si falta uno, el sitio no se construye.
5. Escribe el texto en este orden, con esos títulos:
   1. ¿Qué puedes hacer con él?
   2. ¿Qué resuelve mejor?
   3. ¿Cómo empezar?
   4. ¿Qué necesitas?
   5. Alternativas y cuándo elegirlas
6. En la terminal, en la carpeta del proyecto:

```bash
npm install
npm run build
```

Si el comando `build` falla, falta un campo o hay un error en el texto. Arréglalo antes de pedir la revisión.

7. Abre un pull request. En la descripción, di qué fuentes miraste y qué no pudiste comprobar.

## Qué no entra por ahora

- Historias de la comunidad y “skills” (recetas para bots). Eso queda para más adelante.
- Fichas de vibe coding (Lovable, Bolt, Replit, etc.).
- Logos de marcas.

Si tienes dudas, abre un issue y pregunta antes de escribir una ficha larga.
