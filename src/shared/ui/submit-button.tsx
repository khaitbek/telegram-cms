"use client";

import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button, type ButtonProps } from "./button";

type Props = ButtonProps;

export function SubmitButton({ children, ...props }: Props) {
	const { pending } = useFormStatus();

	return (
		<Button disabled={pending} {...props}>
			{pending && <Loader2 className="mr-2 animate-spin" />}
			{children}
		</Button>
	);
}
