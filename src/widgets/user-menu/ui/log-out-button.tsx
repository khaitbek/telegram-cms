"use client";

import { DropdownMenuItem } from "@/shared/ui/dropdown-menu";
import { LogOutIcon } from "lucide-react";
import { logOutAction } from "../actions/log-out";

export function LogOutButton() {
	return (
		<DropdownMenuItem className="cursor-pointer" onClick={logOutAction}>
			<LogOutIcon />
			Log out
		</DropdownMenuItem>
	);
}
