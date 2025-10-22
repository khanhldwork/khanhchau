import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#667eea',
          color: 'white',
          fontSize: 32,
          fontWeight: 'bold',
        }}
      >
        <div>THƯ MỜI CƯỚI</div>
        <div>DUY KHÁNH & MINH CHÂU</div>
        <div style={{ fontSize: 20, marginTop: 20 }}>wedly.info</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
