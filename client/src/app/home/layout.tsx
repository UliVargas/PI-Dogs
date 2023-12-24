export default function HomeLayout({
  children
}:{
  children: React.ReactNode
}) {
  return (
    <main className='w-[1200px] mx-auto border-4'>
      {children}
    </main>
  )
}