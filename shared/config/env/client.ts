import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const clientEnv = createEnv({
	client: {
		NEXT_PUBLIC_TELEGRAM_BOT_USERNAME: z.string(),
	},
	experimental__runtimeEnv: {
		NEXT_PUBLIC_TELEGRAM_BOT_USERNAME:
			process.env.NEXT_PUBLIC_TELEGRAM_BOT_USERNAME,
	},
});
