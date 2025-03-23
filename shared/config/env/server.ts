import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const serverEnv = createEnv({
	server: {
		TELEGRAM_BOT_TOKEN: z.string(),
		TELEGRAM_BOT_DOMAIN: z.string().url(),
	},
	experimental__runtimeEnv: {},
});
