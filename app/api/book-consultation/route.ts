import { NextRequest, NextResponse } from 'next/server'
import { sanityClient } from '@/lib/sanityClient'

export async function POST(req: NextRequest) {
  try {
    const { name, mobile, preferredTime, page } = await req.json()

    if (!name || !mobile) {
      return NextResponse.json({ error: 'Name and mobile required.' }, { status: 400 })
    }

    await sanityClient.create({
      _type: 'consultationBooking',
      name,
      mobile,
      preferredTime: preferredTime || '',
      page: page || 'uttar-basti',
      submittedAt: new Date().toISOString(),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Submission failed.' }, { status: 500 })
  }
}