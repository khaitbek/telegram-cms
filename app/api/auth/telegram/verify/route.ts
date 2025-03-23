import crypto from "crypto";
import { serverEnv } from "@/shared/config/env/server";
import { NextResponse } from "next/server";

// Your bot token from BotFather
const BOT_TOKEN = serverEnv.TELEGRAM_BOT_TOKEN;

// Function to verify Telegram authentication data
function verifyTelegramData(data: any) {
	if (!BOT_TOKEN) {
		throw new Error("TELEGRAM_BOT_TOKEN is not defined");
	}

	const { hash, ...userData } = data;

	// Check if the auth date is not too old (1 day)
	const authDate = Number.parseInt(userData.auth_date);
	if (Date.now() / 1000 - authDate > 86400) {
		return false;
	}

	// Sort the userData object by key
	const dataCheckString = Object.keys(userData)
		.sort()
		.map((key) => `${key}=${userData[key]}`)
		.join("\n");

	// Create a secret key from the bot token
	const secretKey = crypto.createHash("sha256").update(BOT_TOKEN).digest();

	// Calculate the hash
	const calculatedHash = crypto
		.createHmac("sha256", secretKey)
		.update(dataCheckString)
		.digest("hex");

	// Compare the calculated hash with the provided hash
	return calculatedHash === hash;
}

export async function POST(request: Request) {
	try {
		const userData = await request.json();
		console.log({ userData });

		// Verify the data from Telegram
		const isValid = verifyTelegramData(userData);

		if (!isValid) {
			return NextResponse.json(
				{ success: false, message: "Invalid authentication data" },
				{ status: 401 },
			);
		}

		// Here you would typically:
		// 1. Check if the user exists in your database
		// 2. Create a new user if they don't exist
		// 3. Generate a session token or JWT
		// 4. Set cookies or return the token

		// For demonstration, we'll just return success
		return NextResponse.json({
			success: true,
			user: {
				id: userData.id,
				username: userData.username,
				firstName: userData.first_name,
				lastName: userData.last_name,
				photoUrl: userData.photo_url,
			},
		});
	} catch (error) {
		console.error("Error verifying Telegram auth:", error);
		return NextResponse.json(
			{ success: false, message: "Authentication failed" },
			{ status: 500 },
		);
	}
}
