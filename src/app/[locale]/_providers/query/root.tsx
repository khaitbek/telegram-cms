"use client";

import { type QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";

type Props = {
	children: ReactNode;
	queryClient: QueryClient;
};

export function QueryProvider(props: Props) {
	return (
		<QueryClientProvider client={props.queryClient}>
			{props.children}
		</QueryClientProvider>
	);
}
