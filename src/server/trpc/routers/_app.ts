import { createTRPCRouter } from "../init";
import { channelRouter } from "./channel";

const appRouter = createTRPCRouter({
	channel: channelRouter,
});

type AppRouter = typeof appRouter;

export { appRouter, type AppRouter };
