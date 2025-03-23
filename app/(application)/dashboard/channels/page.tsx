import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, PlusCircle, Settings, Edit, Trash2, Users, BarChart, Search } from "lucide-react"

export default function ChannelsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
        <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
          <MessageSquare className="h-6 w-6" />
          <span>TelegramCMS</span>
        </Link>
        <nav className="hidden flex-1 items-center gap-6 md:flex">
          <Link href="/dashboard" className="text-sm font-medium">
            Dashboard
          </Link>
          <Link href="/dashboard/channels" className="text-sm font-medium text-primary">
            Channels
          </Link>
          <Link href="/dashboard/content" className="text-sm font-medium">
            Content
          </Link>
          <Link href="/dashboard/team" className="text-sm font-medium">
            Team
          </Link>
          <Link href="/dashboard/analytics" className="text-sm font-medium">
            Analytics
          </Link>
        </nav>
      </header>
      <main className="flex-1 p-6">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Channels</h1>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Connect New Channel
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search channels..." className="w-full pl-8" />
            </div>
            <Button variant="outline">
              <Settings className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All Channels</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="archived">Archived</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4 pt-4">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Tech Updates</CardTitle>
                    <CardDescription>@techupdates</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <div className="text-sm text-muted-foreground">Subscribers</div>
                          <div className="text-xl font-bold">5,230</div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-sm text-muted-foreground">Posts</div>
                          <div className="text-xl font-bold">128</div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm text-muted-foreground">Last Post</div>
                        <div className="text-sm">2 hours ago</div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      <BarChart className="mr-2 h-3 w-3" />
                      Analytics
                    </Button>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="mr-2 h-3 w-3" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        <Users className="mr-2 h-3 w-3" />
                        Team
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Daily News</CardTitle>
                    <CardDescription>@dailynewsfeed</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <div className="text-sm text-muted-foreground">Subscribers</div>
                          <div className="text-xl font-bold">12,845</div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-sm text-muted-foreground">Posts</div>
                          <div className="text-xl font-bold">342</div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm text-muted-foreground">Last Post</div>
                        <div className="text-sm">5 hours ago</div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      <BarChart className="mr-2 h-3 w-3" />
                      Analytics
                    </Button>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="mr-2 h-3 w-3" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        <Users className="mr-2 h-3 w-3" />
                        Team
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Lifestyle Tips</CardTitle>
                    <CardDescription>@lifestyletips</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <div className="text-sm text-muted-foreground">Subscribers</div>
                          <div className="text-xl font-bold">3,450</div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-sm text-muted-foreground">Posts</div>
                          <div className="text-xl font-bold">87</div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm text-muted-foreground">Last Post</div>
                        <div className="text-sm">1 day ago</div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      <BarChart className="mr-2 h-3 w-3" />
                      Analytics
                    </Button>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="mr-2 h-3 w-3" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        <Users className="mr-2 h-3 w-3" />
                        Team
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="active" className="space-y-4 pt-4">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Tech Updates</CardTitle>
                    <CardDescription>@techupdates</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <div className="text-sm text-muted-foreground">Subscribers</div>
                          <div className="text-xl font-bold">5,230</div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-sm text-muted-foreground">Posts</div>
                          <div className="text-xl font-bold">128</div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm text-muted-foreground">Last Post</div>
                        <div className="text-sm">2 hours ago</div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      <BarChart className="mr-2 h-3 w-3" />
                      Analytics
                    </Button>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="mr-2 h-3 w-3" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        <Users className="mr-2 h-3 w-3" />
                        Team
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Daily News</CardTitle>
                    <CardDescription>@dailynewsfeed</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <div className="text-sm text-muted-foreground">Subscribers</div>
                          <div className="text-xl font-bold">12,845</div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-sm text-muted-foreground">Posts</div>
                          <div className="text-xl font-bold">342</div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm text-muted-foreground">Last Post</div>
                        <div className="text-sm">5 hours ago</div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      <BarChart className="mr-2 h-3 w-3" />
                      Analytics
                    </Button>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="mr-2 h-3 w-3" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        <Users className="mr-2 h-3 w-3" />
                        Team
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Lifestyle Tips</CardTitle>
                    <CardDescription>@lifestyletips</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <div className="text-sm text-muted-foreground">Subscribers</div>
                          <div className="text-xl font-bold">3,450</div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-sm text-muted-foreground">Posts</div>
                          <div className="text-xl font-bold">87</div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm text-muted-foreground">Last Post</div>
                        <div className="text-sm">1 day ago</div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      <BarChart className="mr-2 h-3 w-3" />
                      Analytics
                    </Button>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="mr-2 h-3 w-3" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        <Users className="mr-2 h-3 w-3" />
                        Team
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="archived" className="pt-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center justify-center space-y-2 py-6 text-center">
                    <div className="rounded-full bg-muted p-3">
                      <Trash2 className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="text-lg font-medium">No Archived Channels</div>
                    <div className="text-sm text-muted-foreground">You don't have any archived channels yet</div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

