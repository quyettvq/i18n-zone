export interface I18nZoneValidator {
  validateResources(): null|{[locale: string]: {[id: string]: string[]}}
}
