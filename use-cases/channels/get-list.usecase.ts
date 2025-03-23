import { getChannelList } from "@/data-access/channels/get-list.persistence";
import type { IChannel } from "@/entities/channel";
import { type Result, err, ok } from "neverthrow";

type GetListOfChannelsError = {
	type: "COULD_NOT_GET_CHANNELS";
	error: {
		type: string;
	};
};

export async function getListOfChannelsUseCase(): Promise<
	Result<IChannel[], GetListOfChannelsError>
> {
	const result = await getChannelList();
	if (result.isErr()) {
		return err({
			type: "COULD_NOT_GET_CHANNELS",
			error: result.error,
		});
	}

	return ok(
		result.value.map((value) => ({
			id: value.id,
			officialName: value.title,
			username: value.username,
			subscribers: 0,
			publications: 0,
		})),
	);
}
