import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, PlusCircle, Settings, Edit, Users, Search, Mail, Shield, Eye } from "lucide-react"

export default function TeamPage() {
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
          <Link href="/dashboard/channels" className="text-sm font-medium">
            Channels
          </Link>
          <Link href="/dashboard/content" className="text-sm font-medium">
            Content
          </Link>
          <Link href="/dashboard/team" className="text-sm font-medium text-primary">
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
            <h1 className="text-3xl font-bold">Team Management</h1>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Invite Team Member
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search team members..." className="w-full pl-8" />
            </div>
            <Button variant="outline">
              <Settings className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All Members</TabsTrigger>
              <TabsTrigger value="admins">Admins</TabsTrigger>
              <TabsTrigger value="editors">Editors</TabsTrigger>
              <TabsTrigger value="viewers">Viewers</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Team Members</CardTitle>
                  <CardDescription>Manage your team members and their access permissions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b pb-4">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">Sarah Johnson</div>
                          <div className="text-sm text-muted-foreground">sarah@example.com</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                          <Shield className="h-3 w-3" />
                          Admin
                        </div>
                        <Select defaultValue="all">
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Access to" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Channels</SelectItem>
                            <SelectItem value="tech">Tech Updates</SelectItem>
                            <SelectItem value="news">Daily News</SelectItem>
                            <SelectItem value="lifestyle">Lifestyle Tips</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button variant="outline" size="sm">
                          <Edit className="mr-2 h-3 w-3" />
                          Edit
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between border-b pb-4">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">Michael Chen</div>
                          <div className="text-sm text-muted-foreground">michael@example.com</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 rounded-full bg-blue-500/10 px-2 py-1 text-xs font-medium text-blue-500">
                          <Edit className="h-3 w-3" />
                          Editor
                        </div>
                        <Select defaultValue="tech">
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Access to" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Channels</SelectItem>
                            <SelectItem value="tech">Tech Updates</SelectItem>
                            <SelectItem value="news">Daily News</SelectItem>
                            <SelectItem value="lifestyle">Lifestyle Tips</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button variant="outline" size="sm">
                          <Edit className="mr-2 h-3 w-3" />
                          Edit
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between border-b pb-4">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">Alex Rodriguez</div>
                          <div className="text-sm text-muted-foreground">alex@example.com</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 rounded-full bg-blue-500/10 px-2 py-1 text-xs font-medium text-blue-500">
                          <Edit className="h-3 w-3" />
                          Editor
                        </div>
                        <Select defaultValue="lifestyle">
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Access to" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Channels</SelectItem>
                            <SelectItem value="tech">Tech Updates</SelectItem>
                            <SelectItem value="news">Daily News</SelectItem>
                            <SelectItem value="lifestyle">Lifestyle Tips</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button variant="outline" size="sm">
                          <Edit className="mr-2 h-3 w-3" />
                          Edit
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">Emma Wilson</div>
                          <div className="text-sm text-muted-foreground">emma@example.com</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 rounded-full bg-green-500/10 px-2 py-1 text-xs font-medium text-green-500">
                          <Eye className="h-3 w-3" />
                          Viewer
                        </div>
                        <Select defaultValue="news">
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Access to" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Channels</SelectItem>
                            <SelectItem value="tech">Tech Updates</SelectItem>
                            <SelectItem value="news">Daily News</SelectItem>
                            <SelectItem value="lifestyle">Lifestyle Tips</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button variant="outline" size="sm">
                          <Edit className="mr-2 h-3 w-3" />
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Pending Invitations</CardTitle>
                  <CardDescription>Team members who have been invited but haven't joined yet</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                        <Mail className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <div className="font-medium">David Kim</div>
                        <div className="text-sm text-muted-foreground">david@example.com</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 rounded-full bg-blue-500/10 px-2 py-1 text-xs font-medium text-blue-500">
                        <Edit className="h-3 w-3" />
                        Editor
                      </div>
                      <div className="text-sm text-muted-foreground">Invited 2 days ago</div>
                      <Button variant="outline" size="sm">
                        <Mail className="mr-2 h-3 w-3" />
                        Resend
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="admins" className="space-y-4 pt-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b pb-4">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">Sarah Johnson</div>
                          <div className="text-sm text-muted-foreground">sarah@example.com</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                          <Shield className="h-3 w-3" />
                          Admin
                        </div>
                        <Select defaultValue="all">
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Access to" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Channels</SelectItem>
                            <SelectItem value="tech">Tech Updates</SelectItem>
                            <SelectItem value="news">Daily News</SelectItem>
                            <SelectItem value="lifestyle">Lifestyle Tips</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button variant="outline" size="sm">
                          <Edit className="mr-2 h-3 w-3" />
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="editors" className="space-y-4 pt-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b pb-4">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">Michael Chen</div>
                          <div className="text-sm text-muted-foreground">michael@example.com</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 rounded-full bg-blue-500/10 px-2 py-1 text-xs font-medium text-blue-500">
                          <Edit className="h-3 w-3" />
                          Editor
                        </div>
                        <Select defaultValue="tech">
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Access to" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Channels</SelectItem>
                            <SelectItem value="tech">Tech Updates</SelectItem>
                            <SelectItem value="news">Daily News</SelectItem>
                            <SelectItem value="lifestyle">Lifestyle Tips</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button variant="outline" size="sm">
                          <Edit className="mr-2 h-3 w-3" />
                          Edit
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">Alex Rodriguez</div>
                          <div className="text-sm text-muted-foreground">alex@example.com</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 rounded-full bg-blue-500/10 px-2 py-1 text-xs font-medium text-blue-500">
                          <Edit className="h-3 w-3" />
                          Editor
                        </div>
                        <Select defaultValue="lifestyle">
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Access to" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Channels</SelectItem>
                            <SelectItem value="tech">Tech Updates</SelectItem>
                            <SelectItem value="news">Daily News</SelectItem>
                            <SelectItem value="lifestyle">Lifestyle Tips</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button variant="outline" size="sm">
                          <Edit className="mr-2 h-3 w-3" />
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="viewers" className="space-y-4 pt-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">Emma Wilson</div>
                          <div className="text-sm text-muted-foreground">emma@example.com</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 rounded-full bg-green-500/10 px-2 py-1 text-xs font-medium text-green-500">
                          <Eye className="h-3 w-3" />
                          Viewer
                        </div>
                        <Select defaultValue="news">
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Access to" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Channels</SelectItem>
                            <SelectItem value="tech">Tech Updates</SelectItem>
                            <SelectItem value="news">Daily News</SelectItem>
                            <SelectItem value="lifestyle">Lifestyle Tips</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button variant="outline" size="sm">
                          <Edit className="mr-2 h-3 w-3" />
                          Edit
                        </Button>
                      </div>
                    </div>
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

