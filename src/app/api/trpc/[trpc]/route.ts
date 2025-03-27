import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

import { createTRPCContext } from "@/server/trpc/init";

import { appRouter } from "@/server/trpc/routers/_app";

async function handler(req: Request) {
	return fetchRequestHandler({
		req,
		endpoint: "/api/trpc",
		router: appRouter,
		createContext: createTRPCContext,
	});
}

export { handler as GET, handler as POST };
