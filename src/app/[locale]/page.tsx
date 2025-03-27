import { Footer } from "@/app/[locale]/_widgets/footer";
import { Header } from "@/app/[locale]/_widgets/header";
import { Hero } from "@/app/[locale]/_widgets/hero";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");
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
