import { z } from "zod";
import { baseTRPCProcedure, createTRPCRouter } from "../init";

const appRouter = createTRPCRouter({
	hello: baseTRPCProcedure
		.input(
			z.object({
				text: z.string(),
			}),
		)
		.query(({ input }) => ({
			greeting: `Hello ${input.text}`,
		})),
});

type AppRouter = typeof appRouter;

export { appRouter, type AppRouter };
