import { auth } from "@auth";
import { type Result, err, ok } from "neverthrow";
import { headers as nextHeaders } from "next/headers";

type UseCaseError =
	| {
			type: "FAILED_TO_LOGOUT";
			reason?: string;
	  }
	| {
			type: "UNKNOWN_ERROR";
			error?: unknown;
	  };

type UseCaseSuccess = true;

type UseCaseResult = Result<UseCaseSuccess, UseCaseError>;

export async function logOutUseCase(): Promise<UseCaseResult> {
	try {
		const headers = await nextHeaders();
		const result = await auth.api.signOut({ headers });
		return ok(true);
	} catch (error) {
		if (error instanceof Error) {
			return err({
				reason: error.message,
				type: "FAILED_TO_LOGOUT",
			});
		}
		return err({
			type: "UNKNOWN_ERROR",
			error,
		});
	}
}
