// app/api/og/route.ts - Redirect đến ảnh thật
import { NextResponse } from 'next/server'

export const runtime = 'edge'

export async function GET() {
  // Redirect thẳng đến ảnh Cloudinary của bạn
  return NextResponse.redirect('https://res.cloudinary.com/dpufemrnq/image/upload/v1761015790/demo/1.png.png')
}