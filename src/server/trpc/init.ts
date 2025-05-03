import { getServerSession } from "@/shared/lib/utils/session";
import type {
	CurrentSession,
	CurrentSessionUser,
} from "@/shared/types/session";
import { TRPCError, initTRPC } from "@trpc/server";
import { experimental_nextAppDirCaller } from "@trpc/server/adapters/next-app-dir";
import { cache } from "react";

export type Context = Awaited<ReturnType<typeof createTRPCContext>>;

export const createTRPCContext = cache(async () => {
	const result = await getServerSession();
	const ctx = {
		session: null,
		user: null,
	} as {
		session: CurrentSession | null;
		user: CurrentSessionUser | null;
	};

	if (result.isOk()) {
		ctx.session = result.value.session;
		ctx.user = result.value.user;
	}

	/**
	 * @see: https://trpc.io/docs/server/context
	 */
	return ctx;
});

const t = initTRPC.context<Context>().create({
	/**
	 * @see https://trpc.io/docs/server/data-transformers
	 */
});

const createTRPCRouter = t.router;
const createTRPCCallerFactory = t.createCallerFactory;
const baseTRPCProcedure = t.procedure;

const serverActionProcedure = t.procedure
	.experimental_caller(
		experimental_nextAppDirCaller({
			createContext: createTRPCContext,
		}),
	)
	.use(async (opts) => {
		if (!opts.ctx.user || !opts.ctx.session) {
			throw new TRPCError({
				code: "UNAUTHORIZED",
			});
		}
		return opts.next({
			ctx: { user: opts.ctx.user, session: opts.ctx.session },
		});
	});

export const protectedAction = serverActionProcedure;

const privateTRPCProcedure = t.procedure.use(function isAuthed(opts) {
	if (!opts.ctx.session || !opts.ctx.user) {
		throw new TRPCError({ code: "UNAUTHORIZED" });
	}

	return opts.next({
		ctx: {
			session: opts.ctx.session,
			user: opts.ctx.user,
		},
	});
});

export {
	baseTRPCProcedure,
	createTRPCCallerFactory,
	createTRPCRouter,
	privateTRPCProcedure,
	serverActionProcedure,
};
