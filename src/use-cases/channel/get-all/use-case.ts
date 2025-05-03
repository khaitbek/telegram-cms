import type { IChannel } from "@/entities/channel";
import { db } from "@/server/db/instance";
import { channel } from "@/server/db/schema";
import type { CurrentSessionUser } from "@/shared/types/session";
import {
	type GetUserByIdUseCaseFailure,
	getUserByIdUseCase,
} from "@/use-cases/user/get-by-id/use-case";
import { eq } from "drizzle-orm";
import { type Result, err, fromAsyncThrowable, ok } from "neverthrow";

type Input = {
	userId: CurrentSessionUser["id"];
};

type Failure =
	| GetUserByIdUseCaseFailure
	| {
			type: "DATABASE_ERROR";
			message: string;
	  };

export async function getChannelsByUserIdUseCase({
	userId,
}: Input): Promise<Result<IChannel[], Failure>> {
	// check if a user with the particular id exists
	const getUserByIdResult = await getUserByIdUseCase({
		userId,
	});
	if (getUserByIdResult.isErr()) return err(getUserByIdResult.error);

	// if there is a user, query their channels and return them
	const getUserChannelsResult = await fromAsyncThrowable(
		async () =>
			await db.select().from(channel).where(eq(channel.createdBy, userId)),
		(error): Failure => {
			console.log(error);
			return {
				type: "DATABASE_ERROR",
				message: "Failed to connect to data source!",
			};
		},
	)();
	if (getUserChannelsResult.isErr()) return err(getUserChannelsResult.error);

	const channels = getUserChannelsResult.value;

	return ok(
		channels.map((channel) => ({
			id: channel.id,
			name: channel.username,
		})),
	);
}
