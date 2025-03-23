import { getUserInfo } from "@/lib/auth";
import { Authorized } from "./authorized";
import { Unauthorized } from "./unauthorized";

export async function NavigationBar() {
  const result = await getUserInfo();

  const content = result.isErr() ? <Unauthorized /> : <Authorized />;

  return <nav className="ml-auto flex gap-4 sm:gap-6">{content}</nav>;
}
