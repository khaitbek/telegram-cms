import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Settings, Users } from "lucide-react";
import Link from "next/link";
import { NavigationBar } from "./_components/navigation-bar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link href="/" className="flex items-center font-semibold">
          <MessageSquare className="h-6 w-6 mr-2" />
          <span>TelegramCMS</span>
        </Link>
        <NavigationBar />
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Manage Your Telegram Channels with Ease
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Create, edit, and publish content to your Telegram channels
                    without ever leaving this platform. Collaborate with your
                    team and streamline your content workflow.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register">
                    <Button size="lg" className="w-full">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/features">
                    <Button size="lg" variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full aspect-video overflow-hidden rounded-xl border bg-muted/50 p-4">
                  <div className="flex flex-col space-y-4">
                    <div className="h-8 w-full rounded-md bg-muted/80"></div>
                    <div className="flex gap-4">
                      <div className="h-32 w-32 rounded-md bg-muted/80"></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-4 w-full rounded-md bg-muted/80"></div>
                        <div className="h-4 w-full rounded-md bg-muted/80"></div>
                        <div className="h-4 w-3/4 rounded-md bg-muted/80"></div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="h-32 w-32 rounded-md bg-muted/80"></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-4 w-full rounded-md bg-muted/80"></div>
                        <div className="h-4 w-full rounded-md bg-muted/80"></div>
                        <div className="h-4 w-3/4 rounded-md bg-muted/80"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Key Features
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to manage your Telegram channels
                  efficiently
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <MessageSquare className="h-12 w-12" />
                <h3 className="text-xl font-bold">Content Management</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Create, edit, schedule, and publish content directly to your
                  Telegram channels
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <Users className="h-12 w-12" />
                <h3 className="text-xl font-bold">Team Collaboration</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Assign roles to team members as editors or viewers with
                  specific permissions
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <Settings className="h-12 w-12" />
                <h3 className="text-xl font-bold">Channel Integration</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Connect multiple Telegram channels and manage them from a
                  single dashboard
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full border-t px-4 md:px-6">
        <p className="text-xs text-muted-foreground">
          © 2024 TelegramCMS. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="/terms"
            className="text-xs hover:underline underline-offset-4"
          >
            Terms of Service
          </Link>
          <Link
            href="/privacy"
            className="text-xs hover:underline underline-offset-4"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
