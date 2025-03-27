import { Link } from "@/shared/config/i18n/navigation";
import { getCurrentSessionUser } from "@/shared/lib/utils/session";
import { ModeToggle } from "@/widgets/mode-toggle";
import { UserMenu } from "@/widgets/user-menu";
import { Suspense } from "react";
import { LoginButton } from "./login-button";
import { SignUpButton } from "./signup-button";

export function Header() {
	return (
		<header className="bg-background border-b border-border">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center py-4">
					<div className="flex items-center">
						<Link href="/" className="text-2xl font-bold text-primary">
							StreamLine
						</Link>
					</div>
					<nav className="hidden md:flex space-x-10">
						<Link
							href="#features"
							className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
						>
							Features
						</Link>
						<Link
							href="#testimonials"
							className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
						>
							Testimonials
						</Link>
						<Link
							href="#pricing"
							className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
						>
							Pricing
						</Link>
					</nav>
					<div className="flex items-center space-x-4">
						<ModeToggle />
						<Suspense fallback={<p>Loading...</p>}>
							<DynamicSection />
						</Suspense>
					</div>
				</div>
			</div>
		</header>
	);
}

async function DynamicSection() {
	const result = await getCurrentSessionUser();

	if (result.isErr()) {
		return (
			<>
				<LoginButton />
				<SignUpButton />
			</>
		);
	}

	return <UserMenu user={result.value} />;
}
