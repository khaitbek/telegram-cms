import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { Calendar, FileText, MoreHorizontal, Users } from "lucide-react";
import Link from "next/link";

interface Channel {
	id: string;
	name: string;
	username: string;
	subscribers: number;
	posts: number;
	lastActive: string;
	imageUrl: string;
}

interface ChannelCardProps {
	channel: Channel;
}

export function ChannelCard({ channel }: ChannelCardProps) {
	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		return new Intl.DateTimeFormat("en-US", {
			month: "short",
			day: "numeric",
			year: "numeric",
		}).format(date);
	};

	const formatNumber = (num: number) => {
		return num >= 1000 ? `${(num / 1000).toFixed(1)}k` : num.toString();
	};

	return (
		<Card className="overflow-hidden">
			<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
				<div className="flex items-center space-x-3">
					<Avatar className="h-10 w-10">
						<AvatarImage src={channel.imageUrl} alt={channel.name} />
						<AvatarFallback>{channel.name.substring(0, 2)}</AvatarFallback>
					</Avatar>
					<div>
						<h3 className="font-semibold leading-none">{channel.name}</h3>
						<p className="text-sm text-muted-foreground">{channel.username}</p>
					</div>
				</div>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" size="icon">
							<MoreHorizontal className="h-4 w-4" />
							<span className="sr-only">Open menu</span>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuItem>View details</DropdownMenuItem>
						<DropdownMenuItem>Edit settings</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem className="text-destructive">
							Disconnect
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</CardHeader>
			<CardContent className="pb-3">
				<div className="grid grid-cols-3 gap-2 text-center py-2">
					<div className="flex flex-col">
						<span className="text-sm font-medium flex items-center justify-center gap-1">
							<Users className="h-3 w-3" /> Subs
						</span>
						<span className="text-lg font-semibold">
							{formatNumber(channel.subscribers)}
						</span>
					</div>
					<div className="flex flex-col">
						<span className="text-sm font-medium flex items-center justify-center gap-1">
							<FileText className="h-3 w-3" /> Posts
						</span>
						<span className="text-lg font-semibold">
							{formatNumber(channel.posts)}
						</span>
					</div>
					<div className="flex flex-col">
						<span className="text-sm font-medium flex items-center justify-center gap-1">
							<Calendar className="h-3 w-3" /> Active
						</span>
						<span className="text-sm font-semibold">
							{formatDate(channel.lastActive)}
						</span>
					</div>
				</div>
			</CardContent>
			<CardFooter className="pt-0">
				<Button asChild variant="outline" className="w-full">
					<Link href={`/dashboard/channels/${channel.id}`}>Manage Content</Link>
				</Button>
			</CardFooter>
		</Card>
	);
}
