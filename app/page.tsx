export default function Home() {
  return (
    <main style={{
      margin: 0,
      padding: 0,
      background: '#000',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      <video
        src="/handle-this.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain'
        }}
      />
    </main>
  )
}
