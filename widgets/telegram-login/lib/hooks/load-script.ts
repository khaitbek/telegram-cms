"use client";

import { clientEnv } from "@/shared/config/env/client";
import { useEffect, useRef } from "react";

export function useLoadTelegramLoginWidgetScript() {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://telegram.org/js/telegram-widget.js?22";
		script.async = true;
		script.setAttribute(
			"data-telegram-login",
			clientEnv.NEXT_PUBLIC_TELEGRAM_BOT_USERNAME,
		);
		script.setAttribute("data-size", "large");
		script.setAttribute("data-radius", "8");
		script.setAttribute("data-request-access", "write");
		script.setAttribute("data-userpic", "false");
		script.setAttribute(
			"data-auth-url",
			`${window.location.origin}/api/auth/telegram/callback`,
		);

		// Clean up any existing script or button
		if (containerRef.current) {
			containerRef.current.innerHTML = "";
			containerRef.current.appendChild(script);
		}

		return () => {
			if (script.parentNode) {
				script.parentNode.removeChild(script);
			}
		};
	}, []);

	return containerRef;
}
