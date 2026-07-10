import { NextRequest, NextResponse } from 'next/server'
import { sanityClient } from '@/lib/sanityClient'

export async function POST(req: NextRequest) {
  try {
    const { id } = await req.json()

    if (!id) {
      return NextResponse.json({ error: 'ID required.' }, { status: 400 })
    }

    await sanityClient.delete(id)

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Delete failed.' }, { status: 500 })
  }
}