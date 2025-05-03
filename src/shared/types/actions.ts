// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type MakeAction<T> = T extends (...args: any[]) => Promise<infer U>
	? // biome-ignore lint/suspicious/noExplicitAny: <explanation>
		(state: any, fd: FormData) => Promise<U>
	: never;
