"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MessageSquare, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ConnectChannelForm() {
  const [botToken, setBotToken] = useState("")
  const [channelUsername, setChannelUsername] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/telegram/connect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ botToken, channelUsername }),
      })

      const data = await response.json()

      if (data.success) {
        router.push("/dashboard/channels")
      } else {
        setError(data.message || "Failed to connect channel")
      }
    } catch (err) {
      setError("An error occurred while connecting the channel")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          Connect Telegram Channel
        </CardTitle>
        <CardDescription>Connect your Telegram channel to manage it through this platform</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="botToken">Telegram Bot Token</Label>
            <Input
              id="botToken"
              type="password"
              placeholder="Enter your bot token"
              value={botToken}
              onChange={(e) => setBotToken(e.target.value)}
              required
            />
            <p className="text-xs text-muted-foreground">
              You can get a bot token by talking to @BotFather on Telegram
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="channelUsername">Channel Username</Label>
            <Input
              id="channelUsername"
              placeholder="@yourchannel"
              value={channelUsername}
              onChange={(e) => setChannelUsername(e.target.value)}
              required
            />
            <p className="text-xs text-muted-foreground">Make sure your bot is an admin of this channel</p>
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
        </form>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSubmit} disabled={isLoading} className="w-full">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Connecting...
            </>
          ) : (
            "Connect Channel"
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}

