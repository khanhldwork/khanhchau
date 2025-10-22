import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    background: 'linear-gradient(135deg, #8b0000 0%, #b22222 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontFamily: 'serif',
                    textAlign: 'center',
                }}
            >
                <div style={{ fontSize: 132, margin: 20 }}>❤️</div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
            headers: {
                'Cache-Control': 'no-cache, no-store, must-revalidate',
            },
        }
    )
}