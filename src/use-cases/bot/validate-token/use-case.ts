import { type Result, err, ok } from "neverthrow";

type Input = {
	token: string;
};

type Failure = {
	type: "HTTP_ERROR";
	status: number;
};

type Success = {
	id: string;
};

export async function validateBotTokenUseCase(
	input: Input,
): Promise<Result<Success, Failure>> {
	const { token } = input;

	const response = await fetch(`https://api.telegram.org/bot${token}/getMe`);

	if (!response.ok) {
		// Token is valid
		return err({
			status: response.status,
			type: "HTTP_ERROR",
		});
	}

	const data = await response.json();

	return ok({
		id: data.result.id,
	});
}
