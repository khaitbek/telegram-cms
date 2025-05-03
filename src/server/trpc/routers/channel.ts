import { createTRPCRouter, privateTRPCProcedure } from "@/server/trpc/init";
import { getChannelsByUserIdUseCase } from "@/use-cases/channel/get-all/use-case";

export const channelRouter = createTRPCRouter({
	getByUserId: privateTRPCProcedure.query(async ({ ctx }) => {
		const result = await getChannelsByUserIdUseCase({ userId: ctx.user.id });
		return result;
	}),
});
