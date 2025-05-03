import { Button } from "@/shared/ui/button";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

export function EmptyState() {
	return (
		<div className="flex flex-col items-center justify-center text-center p-8 border border-dashed rounded-lg mt-8">
			<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
				<PlusCircle className="h-6 w-6 text-primary" />
			</div>
			<h3 className="text-lg font-semibold mb-2">No channels connected</h3>
			<p className="text-muted-foreground mb-4 max-w-md">
				Connect your Telegram channels to start managing and scheduling your
				content.
			</p>
			<Button asChild>
				<Link href="/channels/connect">
					<PlusCircle className="mr-2 h-4 w-4" />
					Connect Your First Channel
				</Link>
			</Button>
		</div>
	);
}
