import '../globals.css'
export default function HomeLayout({
  children
}:{
  children: React.ReactNode
}) {
  return (
    <main className='container'>
      {children}
    </main>
  )
}