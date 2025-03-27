import "server-only";

import type {
	CurrentSession,
	CurrentSessionUser,
} from "@/shared/types/session";
import { auth } from "@auth";
import { type Result, err, ok } from "neverthrow";
import { headers as nextHeaders } from "next/headers";

type GetServerSessionError = {
	type: "SESSION_NOT_FOUND";
};

type GetServerSessionSuccess = {
	user: CurrentSessionUser;
	session: CurrentSession;
};

type GetServerSessionResult = Result<
	GetServerSessionSuccess,
	GetServerSessionError
>;

export async function getServerSession(): Promise<GetServerSessionResult> {
	const headers = await nextHeaders();
	const session = await auth.api.getSession({ headers });

	if (!session) {
		return err({ type: "SESSION_NOT_FOUND" });
	}

	return ok({
		session: {
			id: session.session.id,
			createdAt: session.session.createdAt,
			expiresAt: session.session.expiresAt,
			updatedAt: session.session.updatedAt,
			userId: session.session.userId,
		},
		user: {
			email: session.user.email,
			id: session.user.id,
			profileImageUrl: session.user?.image,
			name: session.user.name,
		},
	});
}

type GetCurrentSessionUserResult = Result<
	CurrentSessionUser,
	GetServerSessionError
>;

export async function getCurrentSessionUser(): Promise<GetCurrentSessionUserResult> {
	const session = await getServerSession();
	if (session.isErr()) return err(session.error);

	return ok(session.value.user);
}
