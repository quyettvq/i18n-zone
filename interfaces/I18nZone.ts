import I18nZoneTranslateParams from "./I18nZoneTranslateParams";
import I18nZoneSettings from "./I18nZoneSettings";
import I18nZoneValidator from "./I18nZoneValidator";
import I18nZoneCollector from "./I18nZoneCollector";

export default interface I18nZone {
    translate(id: string, params?: I18nZoneTranslateParams | null, locale?: string): string,

    settings: I18nZoneSettings,

    validator: I18nZoneValidator,

    collector: I18nZoneCollector
}
