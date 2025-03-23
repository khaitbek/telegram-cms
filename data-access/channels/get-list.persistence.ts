import { type Result, ok } from "neverthrow";

type GetChannelListError = {
	type: "COULD_NOT_CONNECT_TO_DB";
};

export async function getChannelList(): Promise<
	Result<
		{
			id: number;
			title: string;
			photo?: string;
			username?: string;
			has_geo: boolean;
			has_link: boolean;
			slow_mode_enabled: boolean;
			restrictred: boolean;
			is_verified: boolean;
			sign_messages: boolean;
			stories_available: boolean;
		}[],
		GetChannelListError
	>
> {
	return ok([
		{
			id: 1,
			title: "",
			username: "username",
			has_geo: false,
			has_link: false,
			slow_mode_enabled: false,
			restrictred: false,
			is_verified: true,
			sign_messages: true,
			stories_available: false,
		},
	]);
}
