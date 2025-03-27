import { Footer } from "@/app/[locale]/_widgets/footer";
import { Header } from "@/app/[locale]/_widgets/header";
import { Hero } from "@/app/[locale]/_widgets/hero";

export default function HomePage() {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main>
				<Hero />
			</main>
			<Footer />
		</div>
	);
}
