import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          backgroundImage: 'url(https://res.cloudinary.com/dpufemrnq/image/upload/v1761015790/demo/1.png.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}