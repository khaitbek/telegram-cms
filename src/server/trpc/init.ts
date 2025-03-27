import { initTRPC } from "@trpc/server";
import { cache } from "react";

export const createTRPCContext = cache(async () => {
	/**
	 * @see: https://trpc.io/docs/server/context
	 */
	return null;
});

const t = initTRPC.create({
	/**
	 * @see https://trpc.io/docs/server/data-transformers
	 */
});

const createTRPCRouter = t.router;
const createTRPCCallerFactory = t.createCallerFactory;
const baseTRPCProcedure = t.procedure;

export { baseTRPCProcedure, createTRPCCallerFactory, createTRPCRouter };
