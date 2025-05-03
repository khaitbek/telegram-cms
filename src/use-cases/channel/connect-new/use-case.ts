import type { ConnectNewChannel } from "@/shared/schema/channel";
import type { CurrentSessionUser } from "@/shared/types/session";
import { validateBotTokenUseCase } from "@/use-cases/bot/validate-token/use-case";
import { type Result, err, ok } from "neverthrow";
import { findChannelFromTgByUsernameUseCase } from "../find-from-telegram-by-username/use-case";

type Input = ConnectNewChannel & {
	userId: CurrentSessionUser["id"];
};

type Failure =
	| {
			type: "TELEGRAM_CHANNEL_NOT_FOUND";
	  }
	| {
			type: "INVALID_BOT_TOKEN";
	  }
	| {
			type: "BOT_IS_NOT_ADMIN";
	  };

type Success = true;

export async function connectNewChannelUseCase(
	input: Input,
): Promise<Result<Success, Failure>> {
	const { username, botToken, userId, name } = input;

	const findChannelFromTgResult = await findChannelFromTgByUsernameUseCase({
		username,
		botToken,
	});
	if (findChannelFromTgResult.isErr()) {
		return err({
			type: "TELEGRAM_CHANNEL_NOT_FOUND",
		});
	}

	const validateBotTokenResult = await validateBotTokenUseCase({
		token: botToken,
	});
	if (validateBotTokenResult.isErr()) {
		return err({
			type: "INVALID_BOT_TOKEN",
		});
	}

	return ok(true);
}
