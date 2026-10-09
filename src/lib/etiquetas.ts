export const repoGithub = 'https://github.com/asdrubalchirinos/bothut';
export const issueSugerirBot = `${repoGithub}/issues/new?template=sugerir-bot.yml`;

export const tipoEtiqueta = {
  chat: 'Asistente de chat',
  agente: 'Agente personal',
  'agente-autoalojado': 'Agente en tu equipo',
} as const;

export const dificultadEtiqueta = {
  facil: 'Fácil',
  media: 'Media',
  avanzada: 'Avanzada',
} as const;

export const siNoEtiqueta = {
  si: 'Sí',
  parcial: 'Parcial',
  no: 'No',
} as const;

export const regionEtiqueta = {
  espana_ue: 'España / UE',
  latinoamerica: 'Latinoamérica',
  eeuu: 'EE. UU.',
} as const;

export const grupoBot = {
  'empieza-aqui': 'Empieza aquí',
  agentes: 'Agentes que trabajan por ti',
  'mas-lejos': 'Para ir más lejos',
} as const;

export const grupoNecesidad = {
  'dia-a-dia': 'Día a día',
  trabajo: 'Trabajo y negocio',
  'mas-lejos': 'Para ir más lejos',
} as const;

export const plataformaEtiqueta: Record<string, string> = {
  web: 'Web',
  ios: 'iPhone / iPad',
  android: 'Android',
  windows: 'Windows',
  mac: 'Mac',
  linux: 'Linux',
  whatsapp: 'WhatsApp',
  telegram: 'Telegram',
  slack: 'Slack',
};

export function grupoDeBot(dificultad: 'facil' | 'media' | 'avanzada', tipo: string) {
  if (dificultad === 'avanzada' || tipo === 'agente-autoalojado') return 'mas-lejos' as const;
  if (tipo === 'chat') return 'empieza-aqui' as const;
  return 'agentes' as const;
}

export function fechaLarga(fecha: Date) {
  return fecha.toLocaleDateString('es', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export function slugifyBot(nombre: string) {
  return nombre
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
