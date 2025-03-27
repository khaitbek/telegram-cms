import { makeQueryClient } from "@/shared/lib/utils/react-query";
import type { QueryClient } from "@tanstack/react-query";

let clientQueryClientSingleton: QueryClient;

export function getQueryClient() {
	if (typeof window === "undefined") {
		// Server: always make a new query client
		return makeQueryClient();
	}
	// Browser: use singleton pattern to keep the same query client
	// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
	return (clientQueryClientSingleton ??= makeQueryClient());
}
