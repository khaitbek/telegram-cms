import { db } from "@/server/db/instance";
import { channel } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import { type Result, err, fromAsyncThrowable, ok } from "neverthrow";

type Input = {
	botToken: string;
};

type Failure =
	| {
			type: "DATABASE_ERROR";
	  }
	| {
			type: "NOT_FOUND";
	  };

type Success = {
	id: number;
	username: string | null;
};

export async function findChannelByBotToken(
	input: Input,
): Promise<Result<Success, Failure>> {
	const result = await fromAsyncThrowable(
		async () =>
			await db
				.select()
				.from(channel)
				.where(eq(channel.botToken, input.botToken)),
		(): Failure => {
			return {
				type: "DATABASE_ERROR",
			};
		},
	)();

	if (result.isErr()) {
		return err(result.error);
	}
	if (result.value.length === 0) {
		return err({
			type: "NOT_FOUND",
		});
	}

	const record = result.value[0];

	return ok({
		id: record.id,
		username: record.username,
	});
}
