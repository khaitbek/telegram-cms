import { routing } from "@/shared/config/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelect from "./select";

export function LocaleSwitcher() {
  const t = useTranslations("Widgets.LocaleSwitcher");
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
      {routing.locales.map((cur) => (
        <option key={cur} value={cur}>
          {t("locale", { locale: cur })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
