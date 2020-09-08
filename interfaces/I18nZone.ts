import {I18nZoneSettings} from "./I18nZoneSettings";
import {I18nZoneValidator} from "./I18nZoneValidator";

export interface I18nZone {
  translate(id: string, params?: {}, locale?: string): string,
  settings: I18nZoneSettings,
  validator: I18nZoneValidator
}
