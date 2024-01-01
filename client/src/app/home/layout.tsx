export default function HomeLayout({
  children
}:{
  children: React.ReactNode
}) {
  return (
    <main className='w-11/12 xl:w-[75rem] mx-auto'>
      {children}
    </main>
  )
}