import type { TGSessionPayload } from "@/shared/types/auth";
import { type Result, err, ok } from "neverthrow";
import { cookies } from "next/headers";

type GetSessionError =
	| {
			type: "SESSION_TOKEN_NOT_FOUND";
	  }
	| {
			type: "SESSION_TOKEN_COULD_NOT_BE_PARSED";
			error: unknown;
	  };

type GetSessionResult = TGSessionPayload;

export async function getSession(): Promise<
	Result<GetSessionResult, GetSessionError>
> {
	const cookieStore = await cookies();
	const sessionCookie = cookieStore.get("session");

	if (!sessionCookie) {
		return err({ type: "SESSION_TOKEN_NOT_FOUND" });
	}

	try {
		const decodedSession = JSON.parse(sessionCookie.value) as GetSessionResult;
		return ok(decodedSession);
	} catch (error) {
		return err({
			type: "SESSION_TOKEN_COULD_NOT_BE_PARSED",
			error,
		});
	}
}

export async function isAuthenticated() {
	const result = await getSession();
	if (result.isErr()) return false;

	return true;
}

type GetUserInfoError = {
	type: "COULD_NOT_GET_SESSION";
	error: GetSessionError;
};

export async function getUserInfo(): Promise<
	Result<TGSessionPayload, GetUserInfoError>
> {
	const result = await getSession();

	if (result.isErr()) {
		return err({
			type: "COULD_NOT_GET_SESSION",
			error: result.error,
		});
	}

	const session = result.value;

	return ok(session);
}
