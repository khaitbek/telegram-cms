import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, ImageIcon, LinkIcon, MessageSquare, Save, Send } from "lucide-react"

export default function NewContentPage() {
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
          <Link href="/dashboard/content" className="text-sm font-medium text-primary">
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
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Create New Content</h1>
            <div className="flex items-center gap-2">
              <Button variant="outline">
                <Save className="mr-2 h-4 w-4" />
                Save Draft
              </Button>
              <Button>
                <Send className="mr-2 h-4 w-4" />
                Publish
              </Button>
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Content Details</CardTitle>
              <CardDescription>Create your content and choose where to publish it</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="channel">Select Channel</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a channel" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tech">Tech Updates</SelectItem>
                    <SelectItem value="news">Daily News</SelectItem>
                    <SelectItem value="lifestyle">Lifestyle Tips</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Enter content title" />
              </div>
              <Tabs defaultValue="text">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="text">Text</TabsTrigger>
                  <TabsTrigger value="media">Media</TabsTrigger>
                  <TabsTrigger value="links">Links</TabsTrigger>
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                </TabsList>
                <TabsContent value="text" className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="content">Content</Label>
                    <Textarea id="content" placeholder="Write your content here..." className="min-h-[200px]" />
                  </div>
                </TabsContent>
                <TabsContent value="media" className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label>Add Images</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex h-40 flex-col items-center justify-center rounded-lg border border-dashed p-4">
                        <ImageIcon className="h-8 w-8 text-muted-foreground" />
                        <div className="mt-2 text-sm text-muted-foreground">Drag and drop or click to upload</div>
                        <Button variant="outline" size="sm" className="mt-4">
                          Upload Image
                        </Button>
                      </div>
                      <div className="flex h-40 flex-col items-center justify-center rounded-lg border border-dashed p-4">
                        <ImageIcon className="h-8 w-8 text-muted-foreground" />
                        <div className="mt-2 text-sm text-muted-foreground">Drag and drop or click to upload</div>
                        <Button variant="outline" size="sm" className="mt-4">
                          Upload Image
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="links" className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="link">Add Link</Label>
                    <div className="flex gap-2">
                      <Input id="link" placeholder="https://example.com" />
                      <Button variant="outline">
                        <LinkIcon className="mr-2 h-4 w-4" />
                        Add
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="text-sm font-medium">No links added yet</div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      Add links to external resources or websites
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="preview" className="space-y-4 pt-4">
                  <div className="rounded-lg border p-6">
                    <div className="space-y-4">
                      <div className="text-lg font-bold">Content Preview</div>
                      <div className="text-sm text-muted-foreground">
                        Your content will appear like this in Telegram
                      </div>
                      <div className="rounded-lg bg-muted p-4">
                        <div className="space-y-2">
                          <div className="font-medium">Preview not available</div>
                          <div className="text-sm text-muted-foreground">
                            Add content in the Text tab to see a preview
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              <div className="space-y-2">
                <Label>Publishing Options</Label>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="schedule">Schedule</Label>
                    <div className="flex gap-2">
                      <Button variant="outline" className="w-full">
                        <Calendar className="mr-2 h-4 w-4" />
                        Select Date
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Time</Label>
                    <div className="flex gap-2">
                      <Button variant="outline" className="w-full">
                        <Clock className="mr-2 h-4 w-4" />
                        Select Time
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Save className="mr-2 h-4 w-4" />
                  Save Draft
                </Button>
                <Button>
                  <Send className="mr-2 h-4 w-4" />
                  Publish
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}

