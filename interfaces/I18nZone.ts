import {I18nZoneSettings} from "./I18nZoneSettings";
import {I18nZoneRuntimeValidator} from "./I18nZoneRuntimeValidator";

export interface I18nZone {
  translate(id: string, params?: {[name: string]: number|string|(number|string)[]}, locale?: string): string,
  settings: I18nZoneSettings,
  runtimeValidator: I18nZoneRuntimeValidator
}
