import type { CurrentSessionUser } from "@/shared/types/session";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";

type Props = {
	user: CurrentSessionUser;
};

export async function UserAvatar({ user }: Props) {
	return (
		<Avatar>
			<AvatarImage src={user.profileImageUrl ?? ""} />
			<AvatarFallback>{user.name?.[0]}</AvatarFallback>
		</Avatar>
	);
}
