import Link from "next/link";

export function Unauthorized() {
  return (
    <>
      <Link
        href="/login"
        className="text-sm font-medium hover:underline underline-offset-4"
      >
        Login
      </Link>
      <Link
        href="/register"
        className="text-sm font-medium hover:underline underline-offset-4"
      >
        Register
      </Link>
    </>
  );
}
