import { Link } from "@/shared/config/i18n/navigation";
import type { CurrentSessionUser } from "@/shared/types/session";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { HomeIcon } from "lucide-react";
import { LogOutButton } from "./log-out-button";
import { UserAvatar } from "./user-avatar";

type Props = {
	user: CurrentSessionUser;
};

export function UserMenu({ user }: Props) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<UserAvatar user={user} />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<LogOutButton />
				<DropdownMenuItem>
					<HomeIcon />
					<Link href="/dashboard">Go to dashboard</Link>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
