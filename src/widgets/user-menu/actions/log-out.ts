"use server";

import { logOutUseCase } from "@/use-cases/auth/log-out/use-case";

export async function logOutAction() {
	const result = await logOutUseCase();

	if (result.isErr()) {
		return {
			success: false,
		};
	}

	return { success: true };
}
