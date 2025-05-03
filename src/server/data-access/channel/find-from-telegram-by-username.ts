import { type Result, err, ok } from "neverthrow";

type Input = {
	username: string;
	botToken: string;
};

type Failure = {
	type: "HTTP_ERROR";
	status: number;
};

type Success = {
	id: string;
};

export async function findChannelFromTgByUsername(
	input: Input,
): Promise<Result<Success, Failure>> {
	const { username, botToken } = input;

	const response = await fetch(
		`https://api.telegram.org/bot${botToken}/getChat?chat_id=${username}`,
	);

	if (!response.ok) {
		return err({
			type: "HTTP_ERROR",
			status: response.status,
		});
	}

	const json = await response.json();

	return ok({
		id: "id",
	});
}
