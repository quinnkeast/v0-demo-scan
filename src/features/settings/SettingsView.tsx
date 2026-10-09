import { useTranslation } from "react-i18next";
import { supportedLngs } from "../../i18n";
import { Text, Button, FormField, Panel } from "../../design-system";

const languageNames: Record<string, string> = {
  en: "English",
  es: "Español",
};

function Settings() {
  const { t, i18n } = useTranslation();

  return (
    <div className="view">
      <Text variant="title">{t("settings.title")}</Text>

      <Panel>
        <FormField label={t("settings.language")}>
          <select
            className="field-input"
            value={i18n.resolvedLanguage}
            onChange={(event) => i18n.changeLanguage(event.target.value)}
          >
            {supportedLngs.map((lng) => (
              <option key={lng} value={lng}>
                {languageNames[lng]}
              </option>
            ))}
          </select>
        </FormField>

        <div className="settings-actions">
          <Button variant="secondary">{t("settings.signOut")}</Button>
        </div>
      </Panel>

      <Text variant="legal">
        DPay is a company in the fintech sector, not a bank. Banking services are provided by partner banks, Members FDIC.
      </Text>
    </div>
  );
}

export default Settings;