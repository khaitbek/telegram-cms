import { ChannelCard } from "../connect/_components/channel-card";

// Mock data - in a real app, this would come from an API
const mockChannels = [
	{
		id: "1",
		name: "Tech News Daily",
		username: "@technewsdaily",
		subscribers: 15420,
		posts: 342,
		lastActive: "2023-04-15T10:30:00Z",
		imageUrl: "/placeholder.svg?height=40&width=40",
	},
	{
		id: "2",
		name: "Marketing Insights",
		username: "@marketingpro",
		subscribers: 8750,
		posts: 156,
		lastActive: "2023-04-14T16:45:00Z",
		imageUrl: "/placeholder.svg?height=40&width=40",
	},
	{
		id: "3",
		name: "Design Inspiration",
		username: "@designdaily",
		subscribers: 12300,
		posts: 278,
		lastActive: "2023-04-13T09:15:00Z",
		imageUrl: "/placeholder.svg?height=40&width=40",
	},
];

export function ChannelList() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{mockChannels.map((channel) => (
				<ChannelCard key={channel.id} channel={channel} />
			))}
		</div>
	);
}
