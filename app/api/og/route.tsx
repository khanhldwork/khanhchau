// app/api/og/route.ts - HOÀN CHỈNH
import { NextResponse } from 'next/server'

export const runtime = 'edge'

export async function GET() {
    const CLOUDINARY_IMAGE_URL = 'https://res.cloudinary.com/dpufemrnq/image/upload/v1761015790/demo/1.png.png'

    try {
        console.log('Fetching image from:', CLOUDINARY_IMAGE_URL)

        const imageResponse = await fetch(CLOUDINARY_IMAGE_URL, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; FacebookBot/1.0)'
            }
        })

        if (!imageResponse.ok) {
            throw new Error(`Cloudinary response: ${imageResponse.status}`)
        }

        const imageData = await imageResponse.arrayBuffer()

        console.log('Image fetched successfully, size:', imageData.byteLength)

        return new Response(imageData, {
            headers: {
                'Content-Type': 'image/png',
                'Content-Length': imageData.byteLength.toString(),
                'Cache-Control': 'no-cache, no-store, must-revalidate, max-age=0',
                'Pragma': 'no-cache',
                'Expires': '0',
                'Access-Control-Allow-Origin': '*',
            },
        })

    } catch (error) {
        console.error('OG image proxy error:', error)

        // Fallback: redirect trực tiếp
        return NextResponse.redirect(CLOUDINARY_IMAGE_URL, {
            status: 302,
            headers: {
                'Cache-Control': 'no-cache, no-store, must-revalidate',
            },
        })
    }
}