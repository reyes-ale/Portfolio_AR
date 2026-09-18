/**
 * Devuelve la versión correcta de un valor bilingüe.
 * Si `value` es un objeto `{ en, es }` regresa el idioma pedido (con inglés
 * como respaldo). Si es un string, array simple, etc., lo regresa tal cual,
 * para no obligar a traducir cosas como nombres de tecnologías o fechas.
 */
export function pick(value, lang) {
  if (
    value &&
    typeof value === 'object' &&
    !Array.isArray(value) &&
    ('en' in value || 'es' in value)
  ) {
    return value[lang] ?? value.en ?? value.es;
  }
  return value;
}
