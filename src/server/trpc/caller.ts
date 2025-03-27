import { makeQueryClient } from "@/shared/lib/utils/react-query";
import { createHydrationHelpers } from "@trpc/react-query/rsc";
import { cache } from "react";
import "server-only"; // <-- ensure this file cannot be imported from the client
import { createTRPCCallerFactory, createTRPCContext } from "./init";
import { appRouter } from "./routers/_app";

// IMPORTANT: Create a stable getter for the query client that
//            will return the same client during the same request.
export const getQueryClient = cache(makeQueryClient);

const caller = createTRPCCallerFactory(appRouter)(createTRPCContext);

export const { trpc, HydrateClient } = createHydrationHelpers<typeof appRouter>(
	caller,
	getQueryClient,
);
