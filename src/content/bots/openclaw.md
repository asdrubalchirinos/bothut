---
nombre: OpenClaw
empresa: OpenClaw Foundation
url: https://openclaw.ai
tipo: agente-autoalojado
actua_por_ti: si
pide_permiso: si
necesidades: [propio-asistente, hablar-por-mensajes, organizar-mi-correo, delegar-tareas]
dificultad: avanzada
codigo_abierto: true
se_instala_en_tu_equipo: true
precio:
  gratis: true
  desde_usd: 0
  resumen: "Gratis y de código abierto (MIT). Pagas aparte la clave de API de un proveedor de IA, en USD, o usas un modelo en tu máquina"
  nota: "No hay plan de paga de OpenClaw. El gasto real es el del modelo. El precio de cada proveedor varía."
disponibilidad:
  espana_ue: si
  latinoamerica: si
  eeuu: si
  notas: "Al instalarlo tú, no hay bloqueo por país. WhatsApp, Telegram y otros canales dependen de las reglas de cada app, no de OpenClaw."
plataformas: [mac, windows, linux, ios, android, whatsapp, telegram, slack]
requiere_cuenta: false
espanol: parcial
revisado: 2026-10-09
alternativas: [hermes-agent, grok-bot, muse]
fuentes:
  - https://openclaw.ai/
  - https://docs.openclaw.ai/
  - https://docs.openclaw.ai/install/
  - https://docs.openclaw.ai/security
  - https://github.com/openclaw/openclaw
resumen: "Tu asistente en tu computadora. Le hablas por WhatsApp, Telegram, Slack y más. Gratis, de código abierto. La seguridad depende de ti."
---

## ¿Qué puedes hacer con él?

Instalar un asistente **en tu computadora** (o en un servidor tuyo) y hablarle por los canales que ya usas: WhatsApp, Telegram, iMessage, Slack, Discord y otros. Puede leer y escribir archivos, ayudar con correo y agenda, y seguir disponible mientras el programa (“Gateway”) esté en marcha.

Lo mantiene la **OpenClaw Foundation**, una organización sin fines de lucro. No hay versión de paga ni telemetría obligatoria (hay una comprobación de versión que puedes apagar). Lo creó Peter Steinberger; el proyecto es de la fundación.

## ¿Qué resuelve mejor?

- **Tener el asistente en tu casa**, con tus datos y tus reglas.
- **Hablarle por WhatsApp o Telegram** sin esperar a que Muse llegue a tu país.
- **Quien acepta leer documentación** y cuidar la seguridad.
- **No es lo mejor para:** la primera semana con IA. Si nunca abriste una terminal, esto se siente hostil. Tampoco es “listo y seguro por defecto”: un permiso mal puesto puede dejar que extraños le hablen a tu bot.

## ¿Cómo empezar?

1. Lee primero la guía de [seguridad](https://docs.openclaw.ai/security). Decide qué *no* quieres que toque.
2. Instálalo en Mac, Windows o Linux siguiendo [docs.openclaw.ai/install](https://docs.openclaw.ai/install/). Hay un instalador y también apps de acompañamiento.
3. Completa el asistente de inicio: elige un proveedor de IA (o un modelo local) y crea el espacio de trabajo.
4. Conecta **un** canal, el más simple para ti (Telegram suele ser rápido). Limita quién puede escribirle (`allowFrom` o el equivalente).
5. Prueba con un archivo de prueba, no con tu correo real. Cuando entiendas los permisos, recién ahí conecta correo o WhatsApp.

## ¿Qué necesitas?

- Una computadora Mac, Windows o Linux. Hace falta un entorno técnico (Node, según la guía actual).
- Una **clave de API** de un proveedor de IA (se paga aparte, casi siempre en dólares) **o** un modelo que corra en tu máquina (gratis de licencia, caro en hardware).
- Tiempo para leer la documentación. Está en **inglés**. No comprobamos una interfaz completa en español.
- Ganas de cuidar la seguridad: lista de permitidos, no exponer el Gateway a internet sin protección, no instalar “skills” de extraños.

**Precio de OpenClaw:** US$0. **Precio real:** el del modelo. No hay tarifa mensual de la fundación.

**Disponibilidad:** en cualquier país donde puedas instalar software y pagar (si aplica) a un proveedor de IA.

## Alternativas y cuándo elegirlas

- **Hermes Agent:** otra opción de código abierto, con app de escritorio y la posibilidad de **Hermes Cloud** si no quieres dejar el PC encendido.
- **Grok Bot o Dots:** si prefieres pagar y que la empresa se encargue de la computadora en la nube.
- **Muse:** si estás en EE. UU. o Canadá y quieres WhatsApp sin instalar nada.
- **ChatGPT o Gemini:** si todavía estás aprendiendo a pedir las cosas bien.
