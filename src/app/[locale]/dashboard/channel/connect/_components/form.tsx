"use client";

import {
	type ConnectNewChannel,
	connectNewChannelSchema,
} from "@/shared/schema/channel";
import { Alert, AlertDescription, AlertTitle } from "@/shared/ui/alert";
import { Button } from "@/shared/ui/button";
import { Card, CardContent } from "@/shared/ui/card";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { connectNewChannelAction } from "../../../_actions/connect-new-channel";
import { BotFatherGuide } from "./bot-father-guide";

export function ConnectChannelForm() {
	const router = useRouter();

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [isError, setIsError] = useState<boolean>(false);

	const form = useForm<ConnectNewChannel>({
		resolver: zodResolver(connectNewChannelSchema),
		defaultValues: {
			username: "",
			botToken: "",
			name: "",
		},
	});

	async function onSubmit(values: ConnectNewChannel) {
		setIsSubmitting(true);
		setError(null);
		setIsError(false);

		const result = await connectNewChannelAction(values);

		if (!result.success) {
			setIsError(true);
			setError(result.message);
		} else {
			form.reset();
		}
		setIsSubmitting(false);
	}

	async function handleCancel() {
		router.push("/dashboard/channel");
	}

	return (
		<Card>
			<CardContent className="pt-6">
				{isError && (
					<Alert variant="destructive" className="mb-6">
						<AlertCircle className="h-4 w-4" />
						<AlertTitle>Error</AlertTitle>
						<AlertDescription>{error}</AlertDescription>
					</Alert>
				)}

				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
						<FormField
							control={form.control}
							name="username"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Channel Username</FormLabel>
									<FormControl>
										<Input placeholder="yourchannel" {...field} />
									</FormControl>
									<FormDescription>
										The username of your Telegram channel
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="botToken"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Bot Token</FormLabel>
									<FormControl>
										<Input
											placeholder="123456789:ABCDefGhIJKlmNoPQRsTUVwxyZ"
											type="password"
											{...field}
										/>
									</FormControl>
									<FormDescription className="flex items-start gap-1">
										<span>Your Telegram bot token from BotFather.</span>
										<BotFatherGuide />
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Channel Display Name</FormLabel>
									<FormControl>
										<Input placeholder="My Awesome Channel" {...field} />
									</FormControl>
									<FormDescription>
										A friendly name to identify this channel in our platform
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						<div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-end">
							<Button
								type="button"
								variant="outline"
								onClick={handleCancel}
								disabled={isSubmitting}
							>
								Cancel
							</Button>
							<Button type="submit" disabled={isSubmitting}>
								{isSubmitting ? "Connecting..." : "Connect Channel"}
							</Button>
						</div>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}
