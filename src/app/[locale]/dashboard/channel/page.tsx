import { ChannelList } from "./connect/_components/channel-list";
import { PageHeader } from "./connect/_components/header";

export default function ChannelsPage() {
	return (
		<div className="container px-4 py-6 md:py-10 mx-auto">
			<PageHeader />
			<ChannelList />
		</div>
	);
}
