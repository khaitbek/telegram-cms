"use client";

import { authClient } from "@/shared/auth/client";
import { Button } from "@/shared/ui/button";

export function LoginButton() {
  return (
    <Button
      onClick={() => {
        const result = authClient.signIn.social({
          provider: "google",
        });
      }}
      variant="outline"
      className="hidden sm:inline-flex"
    >
      Log in
    </Button>
  );
}
