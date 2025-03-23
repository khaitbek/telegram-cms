import { serverEnv } from "@/shared/config/env/server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
	const url = new URL(serverEnv.TELEGRAM_BOT_DOMAIN);

	try {
		const params = new URL(request.url).searchParams;

		// Get all the parameters from the Telegram callback
		const telegramData = {
			id: params.get("id"),
			first_name: params.get("first_name"),
			last_name: params.get("last_name"),
			username: params.get("username"),
			photo_url: params.get("photo_url"),
			auth_date: params.get("auth_date"),
			hash: params.get("hash"),
		};

		// Verify the data by calling your verify endpoint
		const verifyResponse = await fetch(
			`${url.origin}/api/auth/telegram/verify`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(telegramData),
			},
		);

		const verifyData = await verifyResponse.json();

		if (verifyData.success) {
			// Set a session cookie or token
			const cookieStore = cookies();
			cookieStore.set("session", JSON.stringify(verifyData.user), {
				httpOnly: true,
				secure: true,
				maxAge: 60 * 60 * 24 * 7, // 1 week
				path: "/",
			});

			// Redirect to dashboard
			return NextResponse.redirect(new URL("/dashboard", url.origin));
		}
		return NextResponse.redirect(
			new URL(
				`/login?error=${encodeURIComponent("Authentication failed")}`,
				url.origin,
			),
		);
	} catch (error) {
		console.error("Error in Telegram callback:", error);
		return NextResponse.redirect(
			new URL(
				`/login?error=${encodeURIComponent("An error occurred during authentication")}`,
				url.origin,
			),
		);
	}
}
