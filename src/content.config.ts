import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const siNoParcial = z.enum(['si', 'parcial', 'no']);

const bots = defineCollection({
  loader: glob({ base: './src/content/bots', pattern: '**/*.md' }),
  schema: z.object({
    nombre: z.string(),
    empresa: z.string(),
    url: z.string().url(),
    tipo: z.enum(['chat', 'agente', 'agente-autoalojado']),
    actua_por_ti: z.enum(['no', 'parcial', 'si']),
    pide_permiso: siNoParcial,
    necesidades: z.array(z.string()).min(1),
    dificultad: z.enum(['facil', 'media', 'avanzada']),
    codigo_abierto: z.boolean(),
    se_instala_en_tu_equipo: z.boolean(),
    precio: z.object({
      gratis: z.boolean(),
      desde_usd: z.number().nullable(),
      resumen: z.string(),
      nota: z.string(),
    }),
    disponibilidad: z.object({
      espana_ue: siNoParcial,
      latinoamerica: siNoParcial,
      eeuu: siNoParcial,
      notas: z.string(),
    }),
    plataformas: z.array(z.string()).min(1),
    requiere_cuenta: z.boolean(),
    espanol: siNoParcial,
    revisado: z.coerce.date(),
    alternativas: z.array(z.string()),
    fuentes: z.array(z.string().url()).min(1),
    resumen: z.string(),
    aviso: z.string().optional(),
  }),
});

const necesidades = defineCollection({
  loader: glob({ base: './src/content/necesidades', pattern: '**/*.md' }),
  schema: z.object({
    titulo: z.string(),
    grupo: z.enum(['dia-a-dia', 'trabajo', 'mas-lejos']),
    resumen: z.string(),
    bots: z.array(z.string()),
  }),
});

export const collections = { bots, necesidades };
