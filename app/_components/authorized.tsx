import Link from "next/link";

export function Authorized() {
  return (
    <Link
      href="/dashboard"
      className="text-sm font-medium hover:underline underline-offset-4"
    >
      Dashboard
    </Link>
  );
}
