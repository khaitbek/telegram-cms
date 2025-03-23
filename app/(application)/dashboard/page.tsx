import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getListOfChannelsUseCase } from "@/use-cases/channels/get-list.usecase";
import { Calendar, PlusCircle } from "lucide-react";
import { ChannelGridList } from "./_components/channel-grid-list";

export default async function DashboardPage() {
  const result = await getListOfChannelsUseCase();

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 p-6">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Calendar className="mr-2 h-4 w-4" />
                Last 7 days
              </Button>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Channels
                </CardTitle>
              </CardHeader>
              <CardContent>
                {result.isOk() && (
                  <div className="text-2xl font-bold">
                    {result.value.length}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          <Tabs defaultValue="channels">
            <TabsList>
              <TabsTrigger value="channels">Channels</TabsTrigger>
              <TabsTrigger value="recent">Recent Content</TabsTrigger>
              <TabsTrigger value="team">Team Activity</TabsTrigger>
            </TabsList>
            <TabsContent value="channels" className="space-y-4">
              {result.isOk() && <ChannelGridList channels={result.value} />}
              <Button className="w-full">
                <PlusCircle className="mr-2 h-4 w-4" />
                Connect New Channel
              </Button>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
