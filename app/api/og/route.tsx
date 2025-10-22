// app/api/og/route.ts
import { NextResponse } from 'next/server'

export const runtime = 'edge'

export async function GET() {
    try {
        const imageUrl = 'https://res.cloudinary.com/dpufemrnq/image/upload/v1761015790/demo/1.png.png'

        // Fetch ảnh từ Cloudinary
        const response = await fetch(imageUrl)

        if (!response.ok) {
            throw new Error('Failed to fetch image')
        }

        // Get image data
        const imageBuffer = await response.arrayBuffer()

        // Return image với cache control
        return new Response(imageBuffer, {
            status: 200,
            headers: {
                'Content-Type': 'image/png',
                'Cache-Control': 'no-cache, no-store, must-revalidate, max-age=0',
                'Pragma': 'no-cache',
                'Expires': '0',
                'CDN-Cache-Control': 'no-cache',
            },
        })
    } catch (error) {
        // Fallback: redirect đến ảnh gốc
        return NextResponse.redirect('https://res.cloudinary.com/dpufemrnq/image/upload/v1761015790/demo/1.png.png')
    }
}