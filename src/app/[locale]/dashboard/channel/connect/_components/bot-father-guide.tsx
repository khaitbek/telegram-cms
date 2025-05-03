"use client";

import { Button } from "@/shared/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/shared/ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/shared/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { HelpCircle } from "lucide-react";
import { useState } from "react";

export function BotFatherGuide() {
	const [open, setOpen] = useState(false);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant="link" className="h-auto p-0 text-blue-600">
					<HelpCircle className="h-3 w-3 mr-1" />
					<span>How to create a bot</span>
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>Creating a Telegram Bot</DialogTitle>
					<DialogDescription>
						Follow these steps to create a bot and connect it to your channel
					</DialogDescription>
				</DialogHeader>

				<Tabs defaultValue="create" className="mt-4">
					<TabsList className="grid w-full grid-cols-3">
						<TabsTrigger value="create">Create Bot</TabsTrigger>
						<TabsTrigger value="token">Get Token</TabsTrigger>
						<TabsTrigger value="admin">Make Admin</TabsTrigger>
					</TabsList>

					<TabsContent value="create" className="space-y-4 mt-4">
						<Card>
							<CardHeader>
								<CardTitle>Step 1: Start BotFather</CardTitle>
								<CardDescription>
									Open Telegram and search for @BotFather
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-2">
								<p>1. Open your Telegram app</p>
								<p>
									2. Search for <strong>@BotFather</strong> in the search bar
								</p>
								<p>3. Start a chat with BotFather by clicking "Start" button</p>
								<div className="rounded-md overflow-hidden border mt-2">
									<img
										src="/placeholder.svg?height=200&width=400"
										alt="BotFather in Telegram"
										className="w-full"
									/>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Step 2: Create a New Bot</CardTitle>
								<CardDescription>
									Use the /newbot command to create your bot
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-2">
								<p>
									1. Type <code>/newbot</code> and send it to BotFather
								</p>
								<p>2. Follow the prompts to name your bot</p>
								<p>3. Choose a username for your bot (must end in "bot")</p>
								<div className="bg-gray-100 p-3 rounded-md text-sm mt-2">
									<p>
										<strong>You:</strong> /newbot
									</p>
									<p>
										<strong>BotFather:</strong> Alright, a new bot. How are we
										going to call it? Please choose a name for your bot.
									</p>
									<p>
										<strong>You:</strong> My Content Manager
									</p>
									<p>
										<strong>BotFather:</strong> Good. Now let's choose a
										username for your bot. It must end in `bot`. Like this, for
										example: TetrisBot or tetris_bot.
									</p>
									<p>
										<strong>You:</strong> my_content_manager_bot
									</p>
								</div>
							</CardContent>
						</Card>
					</TabsContent>

					<TabsContent value="token" className="space-y-4 mt-4">
						<Card>
							<CardHeader>
								<CardTitle>Step 3: Get Your Bot Token</CardTitle>
								<CardDescription>
									BotFather will provide you with a token
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-2">
								<p>
									After creating your bot, BotFather will send you a message
									containing your bot token.
								</p>
								<p>It will look something like this:</p>
								<div className="bg-gray-100 p-3 rounded-md text-sm mt-2 font-mono">
									123456789:ABCDefGhIJKlmNoPQRsTUVwxyZ
								</div>
								<p className="mt-2">
									<strong>Important:</strong> This token is like a password.
									Keep it secure and don't share it publicly.
								</p>
								<div className="rounded-md overflow-hidden border mt-2">
									<img
										src="/placeholder.svg?height=200&width=400"
										alt="Bot token example"
										className="w-full"
									/>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Step 4: Copy Your Token</CardTitle>
								<CardDescription>
									Copy the token to use in our platform
								</CardDescription>
							</CardHeader>
							<CardContent>
								<p>
									Copy the entire token and paste it into the "Bot Token" field
									in our form.
								</p>
								<p className="text-red-500 mt-2">
									Never share your bot token with anyone else!
								</p>
							</CardContent>
						</Card>
					</TabsContent>

					<TabsContent value="admin" className="space-y-4 mt-4">
						<Card>
							<CardHeader>
								<CardTitle>Step 5: Add Bot to Your Channel</CardTitle>
								<CardDescription>
									Add your bot as an administrator to your channel
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-2">
								<p>1. Open your Telegram channel</p>
								<p>2. Go to channel info (tap the channel name at the top)</p>
								<p>3. Select "Administrators"</p>
								<p>4. Tap "Add Administrator"</p>
								<p>5. Search for your bot by its username and select it</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Step 6: Set Bot Permissions</CardTitle>
								<CardDescription>
									Configure the correct permissions for your bot
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-2">
								<p>Your bot needs these permissions:</p>
								<ul className="list-disc pl-5 space-y-1">
									<li>Post Messages</li>
									<li>Edit Messages</li>
									<li>Delete Messages</li>
								</ul>
								<p className="mt-2">
									After setting permissions, click "Save" or "Done".
								</p>
								<div className="rounded-md overflow-hidden border mt-2">
									<img
										src="/placeholder.svg?height=200&width=400"
										alt="Bot permissions"
										className="w-full"
									/>
								</div>
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>

				<div className="mt-6 flex justify-end">
					<Button onClick={() => setOpen(false)}>Close Guide</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
}
