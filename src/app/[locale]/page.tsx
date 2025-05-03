import { Footer } from "./_widgets/footer";
import { Header } from "./_widgets/header";
import { Hero } from "./_widgets/hero";

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
