import { Button } from "@/shared/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ConnectChannelForm } from "./_components/form";

export default function ConnectChannelPage() {
	return (
		<div className="container px-4 py-6 md:py-10 mx-auto max-w-3xl">
			<div className="mb-6">
				<Button variant="ghost" size="sm" asChild className="mb-4">
					<Link href="/channels">
						<ArrowLeft className="mr-2 h-4 w-4" />
						Back to Channels
					</Link>
				</Button>
				<h1 className="text-2xl font-bold tracking-tight">
					Connect a Telegram Channel
				</h1>
				<p className="text-muted-foreground mt-1">
					Connect your Telegram channel to manage and schedule content
				</p>
			</div>

			<ConnectChannelForm />
		</div>
	);
}
