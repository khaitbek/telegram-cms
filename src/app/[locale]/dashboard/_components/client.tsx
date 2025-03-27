"use client";

import { trpcClient } from "@/shared/api/trpc/instance";

export function Client() {
	const greeting = trpcClient.hello.useQuery({
		text: "world",
	});

	if (greeting.isLoading) return <div>Loading...</div>;

	return <div>{greeting.data?.greeting}</div>;
}
