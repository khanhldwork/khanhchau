import { ImageResponse } from 'next/og'

export default async function Image() {
    const logoSrc = `https://res.cloudinary.com/dpufemrnq/image/upload/v1761015790/demo/1.png.png`

    return new ImageResponse(
        (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <img src={logoSrc} height="100" />
            </div>
        )
    )
}