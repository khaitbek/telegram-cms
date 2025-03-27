"use client";

import { trpcClient } from "@/shared/api/trpc/instance";
import { httpBatchLink } from "@trpc/client";
import { useState } from "react";
import { QueryProvider } from "../query";
import { getQueryClient } from "../query/helpers";
import { getTRPCBaseUrl } from "./helpers";

export function TRPCProvider(
	props: Readonly<{
		children: React.ReactNode;
	}>,
) {
	const queryClient = getQueryClient();

	const [tClient] = useState(() =>
		trpcClient.createClient({
			links: [
				httpBatchLink({
					// transformer: superjson, <-- if you use a data transformer
					url: getTRPCBaseUrl(),
				}),
			],
		}),
	);

	return (
		<trpcClient.Provider client={tClient} queryClient={queryClient}>
			<QueryProvider queryClient={queryClient}>{props.children}</QueryProvider>
		</trpcClient.Provider>
	);
}
