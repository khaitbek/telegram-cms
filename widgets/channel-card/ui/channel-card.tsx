import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { IChannel } from "@/entities/channel";
import { MessageSquare } from "lucide-react";
import { ChannelActions } from "./channel-actions";

interface Props {
  channel: IChannel;
}

export function ChannelCard({ channel }: Props) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {channel.officialName}
        </CardTitle>
        <MessageSquare className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-sm">@{channel.username}</div>
        <div className="mt-2 flex items-center gap-2">
          <div className="text-xs text-muted-foreground">
            {channel.subscribers} subscribers
          </div>
          <div className="text-xs text-muted-foreground">•</div>
          <div className="text-xs text-muted-foreground">
            {channel.publications} posts
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <ChannelActions />
        </div>
      </CardContent>
    </Card>
  );
}
