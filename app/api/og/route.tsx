import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET() {
    return new ImageResponse(
        (
            <img src="https://res.cloudinary.com/dpufemrnq/image/upload/v1761015790/demo/1.png.png" alt="THƯ MỜI CƯỚI DUY KHÁNH & MINH CHÂU" />
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}
