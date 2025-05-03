import { Button } from "@/shared/ui/button";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

export function PageHeader() {
	return (
		<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
			<div>
				<h1 className="text-2xl font-bold tracking-tight">
					Connected Channels
				</h1>
				<p className="text-muted-foreground mt-1">
					Manage your connected Telegram channels and content
				</p>
			</div>
			<Button asChild>
				<Link href="/dashboard/channel/connect">
					<PlusCircle className="mr-2 h-4 w-4" />
					Connect Channel
				</Link>
			</Button>
		</div>
	);
}
