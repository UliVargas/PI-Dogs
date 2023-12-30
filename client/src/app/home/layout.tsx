import '../globals.css'
export default function HomeLayout({
  children
}:{
  children: React.ReactNode
}) {
  return (
    <main className='w-11/12 lg:w-[80rem] mx-auto'>
      {children}
    </main>
  )
}