import { findChannelFromTgByUsername } from "@/server/data-access/channel/find-from-telegram-by-username";
import { type Result, err, ok } from "neverthrow";

type Input = {
	username: string;
	botToken: string;
};

type Success = {
	id: string;
};

type Failure =
	| {
			type: "CHANNEL_NOT_FOUND";
	  }
	| {
			type: "UNKNOWN_ERROR";
	  };

export async function findChannelFromTgByUsernameUseCase(
	input: Input,
): Promise<Result<Success, Failure>> {
	const { username, botToken } = input;

	const result = await findChannelFromTgByUsername({
		botToken,
		username,
	});

	if (result.isOk()) {
		return ok({
			id: result.value.id,
		});
	}

	if (result.error.status === 400 || result.error.status === 404) {
		return err({
			type: "CHANNEL_NOT_FOUND",
		});
	}

	return err({
		type: "UNKNOWN_ERROR",
	});
}
