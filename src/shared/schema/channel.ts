import { z } from "zod";

export const connectNewChannelSchema = z.object({
	username: z.string().startsWith("@", "The username must start with @"),
	botToken: z
		.string()
		.min(45, { message: "Bot token must be at least 45 characters" })
		.regex(/^\d+:[\w-]+$/, {
			message:
				"Invalid bot token format. It should look like 123456789:ABCDefGhIJKlmNoPQRsTUVwxyZ",
		}),
	name: z
		.string()
		.min(3, { message: "Channel name must be at least 3 characters" })
		.max(30, { message: "Channel name must not exceed 100 characters" }),
});
export type ConnectNewChannel = z.infer<typeof connectNewChannelSchema>;
