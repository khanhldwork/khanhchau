// app/api/og/route.ts - Redirect đến ảnh thật
import { NextResponse } from 'next/server'

export const runtime = 'edge'

export async function GET() {
  // Redirect thẳng đến ảnh Cloudinary của bạn
  return NextResponse.redirect('wedly.info/api/og')
}