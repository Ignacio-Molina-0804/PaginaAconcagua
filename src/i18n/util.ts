import { labels } from "./ui";

// Idioma por defecto que se usará como fallback
const defaultLang = "es";

/**
 * Función factory que crea un traductor para un idioma específico
 * @param lang - Código del idioma (ej: 'es', 'en')
 * @returns Función traductora para ese idioma
 */
export function useTranslations(lang: keyof typeof labels) {
  /**
   * Función interna que realiza la traducción
   * @param key - Clave de la traducción (ej: 'nav.home')
   * @returns Texto traducido al idioma solicitado o al idioma por defecto si no existe
   */
  return function translate(key: keyof typeof labels[typeof defaultLang]) {
    // Intenta obtener la traducción en el idioma solicitado
    // Si no existe, usa la traducción del idioma por defecto
    return labels[lang][key] || labels[defaultLang][key];
  }
}