import {I18nZoneResource} from "./I18nZoneResource";
import {I18nZoneResources} from "./I18nZoneResources";

export interface I18nZoneSettings {
  setLocale(locale: string): void,
  getLocale(): string,
  setDefaultLocale(locale: string): void,
  getDefaultLocale(): string,
  setResource(locale: string, resource: I18nZoneResource): void,
  getResource(locale): I18nZoneResource,
  setResources(resources: I18nZoneResources): void,
  getResources(): I18nZoneResources,
  setNumberFormatter(numberFormatter: (number: number, locale: string, options?: {}) => string): void,
  getNumberFormatter(): (number: number, locale: string, options?: {}) => string
}
