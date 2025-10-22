import { ImageResponse } from 'next/og'

export const runtime = 'edge'

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
          background: 'linear-gradient(135deg, #d4af37 0%, #b8860b 50%, #8b0000 100%)', // Vàng -> Đỏ đậm
          color: 'white',
          fontFamily: 'serif', // Font chữ sang trọng
          textAlign: 'center',
          padding: '60px',
          position: 'relative',
        }}
      >
        {/* Hoa văn trang trí */}
        <div style={{
          position: 'absolute',
          top: 40,
          left: 40,
          right: 40,
          bottom: 40,
          border: '2px solid rgba(255,255,255,0.3)',
          pointerEvents: 'none',
        }} />
        
        {/* Tiêu đề */}
        <div style={{ 
          fontSize: 36, 
          marginBottom: 40, 
          opacity: 0.9,
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
        }}>
          🎊 THIỆP MỜI CƯỚI 🎊
        </div>
        
        {/* Tên chú rể */}
        <div style={{
          fontSize: 48,
          fontWeight: 'bold',
          marginBottom: 15,
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          color: '#fffaf0', // Màu trắng ngà
        }}>
          DUY KHÁNH
        </div>
        
        {/* Trái tim */}
        <div style={{
          fontSize: 32,
          marginBottom: 15,
          color: '#ffd700', // Vàng gold
        }}>
          💖
        </div>
        
        {/* Tên cô dâu */}
        <div style={{
          fontSize: 48,
          fontWeight: 'bold',
          marginBottom: 40,
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          color: '#fffaf0', // Màu trắng ngà
        }}>
          MINH CHÂU
        </div>
        
        {/* Thông điệp */}
        <div style={{
          fontSize: 26,
          opacity: 0.95,
          maxWidth: '80%',
          lineHeight: 1.5,
          marginBottom: 30,
          textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
        }}>
          Trân trọng kính mời bạn<br />đến dự lễ thành hôn của chúng tôi
        </div>
        
        {/* Đường kẻ trang trí */}
        <div style={{
          width: '200px',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #ffd700, transparent)',
          marginBottom: 30,
        }} />
        
        {/* URL website */}
        <div style={{
          fontSize: 20,
          opacity: 0.9,
          color: '#ffd700', // Vàng gold
          fontWeight: 'bold',
        }}>
          wedly.info
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}