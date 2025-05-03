import { db } from "@/server/db/instance";
import { user } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import type { Result, ResultAsync } from "neverthrow";
import { err, fromAsyncThrowable, ok } from "neverthrow";

type Input = {
	userId: string;
};

type Failure =
	| {
			type: "USER_NOT_FOUND_ERROR";
			message: string;
	  }
	| {
			type: "DATABASE_ERROR";
			message: string;
	  };

type User = {
	id: string;
	name: string;
	email: string;
};

export async function getUserByIdUseCase(
	input: Input,
): Promise<Result<User, Failure>> {
	const { userId } = input;

	const result = await fromAsyncThrowable(
		async () => await db.select().from(user).where(eq(user.id, userId)),
		(): Failure => ({
			type: "DATABASE_ERROR",
			message: "Failed to connect to the data source!",
		}),
	)();

	if (result.isErr()) {
		return err(result.error);
	}

	if (result.value.length === 0) {
		return err({
			type: "USER_NOT_FOUND_ERROR",
			message: "User not found!",
		});
	}

	const out = result.value[0];

	return ok({
		id: out.id,
		name: out.name,
		email: out.email,
	});
}

export type { Failure as GetUserByIdUseCaseFailure };
