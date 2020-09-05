export interface I18nZoneRuntimeValidator {
  validateResources(): null|{[locale: string]: {[id: string]: string[]}}
}
