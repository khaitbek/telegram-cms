import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function POST() {
  const cookieStore = cookies()

  // Delete the session cookie
  cookieStore.delete("session")

  return NextResponse.json({ success: true })
}

