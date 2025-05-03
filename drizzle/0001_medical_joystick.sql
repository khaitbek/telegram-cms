ALTER TABLE "channel" ALTER COLUMN "username" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "channel" ALTER COLUMN "botToken" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "channel" ADD COLUMN "name" text NOT NULL;