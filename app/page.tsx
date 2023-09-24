import Link from 'next/link'
import './globals.css'

export default function Home() {
  return (
    <>
      <div className="flex gap-8 flex-col text-center justify-center items-center">
        <h1>já jsem uvodní stránka</h1>
        <Link href="/users" className="btn max-w-lg">
          Users
        </Link>
      </div>
    </>
  )
}
