import type { IChannel } from "@/entities/channel";
import type { JSX } from "react";

interface BaseChannelComponentProps {
  channel: IChannel;
}

interface Props {
  channels: IChannel[];
  ChannelComponent<TProps extends BaseChannelComponentProps>(
    props: TProps,
  ): JSX.Element;
}

export function ChannelList({ channels, ChannelComponent }: Props) {
  return channels.map((channel) => (
    <ChannelComponent channel={channel} key={channel.id} />
  ));
}
