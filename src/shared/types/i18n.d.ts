import type { formats } from "@/shared/config/i18n/request";
import type { routing } from "@/shared/config/i18n/routing";

import type messages from "../../../messages/en.json";

declare module "next-intl" {
	interface AppConfig {
		Locale: (typeof routing.locales)[number];
		Messages: typeof messages;
		Formats: typeof formats;
	}
}
