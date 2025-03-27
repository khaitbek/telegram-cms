import { trpc } from "@/server/trpc/caller";

export default async function Page() {
	const greeting = await trpc.hello({
		text: "world",
	});

	return (
		<>
			<h1>{greeting.greeting}!</h1>
		</>
	);
}
