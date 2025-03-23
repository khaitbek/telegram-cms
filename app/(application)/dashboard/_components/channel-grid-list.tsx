import type { IChannel } from "@/entities/channel";
import { ChannelCard } from "@/widgets/channel-card";
import { ChannelList } from "@/widgets/channel-list";

type Props = {
  channels: IChannel[];
};

export async function ChannelGridList(props: Props) {
  const { channels } = props;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <ChannelList channels={channels} ChannelComponent={ChannelCard} />
    </div>
  );
}
