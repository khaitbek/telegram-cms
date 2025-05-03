import { type Result, err, ok } from "neverthrow";

type Input = {
	channelUsername: string;
	botToken: string;
	botId: string;
};

type Failure =
	| {
			type: "NOT_ADMIN_OF_CHANNEL";
	  }
	| {
			type: "UNKNOWN_ERROR";
	  };

type Success = true;

export async function checkIfBotIsAdminOfChannelUseCase(
	input: Input,
): Promise<Result<Success, Failure>> {
	const { botId, botToken, channelUsername } = input;

	const response = await fetch(
		`https://api.telegram.org/bot${botToken}/getMyDefaultAdministratorRights?for_channels`,
	);

	if (!response.ok) {
		console.log(await response.text());
		return err({
			type: "NOT_ADMIN_OF_CHANNEL",
		});
	}

	const data = await response.json();
	console.log(data);

	return ok(true);
}
