import { db } from "@/server/db/instance";
import { channel } from "@/server/db/schema";
import type { ConnectNewChannel } from "@/shared/schema/channel";
import { type Result, err, fromAsyncThrowable, ok } from "neverthrow";

type Input = ConnectNewChannel & {
	userId: string;
};

type Failure = {
	type: "DATABASE_ERROR";
};

export async function connectNewChannel(
	input: Input,
): Promise<Result<{ id: number }, Failure>> {
	const { botToken, name, userId, username } = input;

	const result = await fromAsyncThrowable(
		async () =>
			await db
				.insert(channel)
				.values({
					createdBy: userId,
					botToken,
					username,
					name,
				})
				.returning({ id: channel.id }),
		(error): Failure => {
			console.log(error, typeof error);
			return {
				type: "DATABASE_ERROR",
			};
		},
	)();

	if (result.isErr()) {
		return err(result.error);
	}

	return ok({
		id: result.value[0].id,
	});
}
