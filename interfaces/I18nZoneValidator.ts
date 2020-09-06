export interface I18nZoneValidator {
  validateResources(): null|{[locale: string]: {[id: string]: string[]}},
  setOption(name: string, value: any): void,
  setOptions(newOptions: {[name: string]: any})
}
