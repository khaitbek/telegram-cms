"use server";

import { protectedAction } from "@/server/trpc/init";
import { connectNewChannelSchema } from "@/shared/schema/channel";
import { connectNewChannelUseCase } from "@/use-cases/channel/connect-new/use-case";

export const connectNewChannelAction = protectedAction
	.input(connectNewChannelSchema)
	.mutation(async ({ ctx, input }) => {
		const result = await connectNewChannelUseCase({
			botToken: input.botToken,
			username: input.username,
			userId: ctx.user.id,
			name: input.name,
		});

		if (result.isErr()) {
			const error = result.error;

			if (error.type === "TELEGRAM_CHANNEL_NOT_FOUND") {
				return {
					message: `No Telegram channel found with the username ${input.username}`,
				};
			}

			if (error.type === "INVALID_BOT_TOKEN") {
				return {
					message: "Invalid bot token or bot doesn't exist!",
				};
			}

			if (error.type === "BOT_IS_NOT_ADMIN") {
				return {
					message: "Bot is not an admin of the channel",
				};
			}

			return {
				message: "Unknown error!",
				success: false,
			};
		}

		return {
			success: true,
			message: "Successfully connected the channel!",
		};
	});
