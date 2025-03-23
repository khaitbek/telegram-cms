"use client";

import { useLoadTelegramLoginWidgetScript } from "@/widgets/telegram-login/lib/hooks/load-script";

interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
  auth_date: number;
  hash: string;
}

declare global {
  interface Window {
    TelegramLoginWidget: {
      dataOnauth: (user: TelegramUser) => void;
    };
  }
}

export default function TelegramLoginButton() {
  const containerRef = useLoadTelegramLoginWidgetScript();

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="telegram-login-container" ref={containerRef}></div>
    </div>
  );
}
