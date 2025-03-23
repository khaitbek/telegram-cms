import UserAccountNav from "@/components/user-account-nav";
import { getUserInfo } from "@/lib/auth";
import { MessageSquare } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import type React from "react";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const result = await getUserInfo();

  // If no user is found, redirect to login
  if (result.isErr()) {
    redirect("/login");
  }

  const user = result.value;

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 font-semibold"
        >
          <MessageSquare className="h-6 w-6" />
          <span>TelegramCMS</span>
        </Link>
        <nav className="hidden flex-1 items-center gap-6 md:flex">
          <Link href="/dashboard" className="text-sm font-medium">
            Dashboard
          </Link>
          <Link href="/dashboard/channels" className="text-sm font-medium">
            Channels
          </Link>
          <Link href="/dashboard/content" className="text-sm font-medium">
            Content
          </Link>
          <Link href="/dashboard/team" className="text-sm font-medium">
            Team
          </Link>
          <Link href="/dashboard/analytics" className="text-sm font-medium">
            Analytics
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <UserAccountNav user={user} />
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
