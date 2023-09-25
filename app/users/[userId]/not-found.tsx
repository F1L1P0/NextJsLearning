import '@/app/globals.css'
import Link from 'next/link'

export default function NotFound() {
  return (
    <p className="fixed top-1/2 left-1/2 translate-center">
      Page not found.
      <br />
      <Link
        className="bg-solid bg-slate-300 border-b-2 p-1 rounded-xl text-black"
        href="http://localhost:3000/">
        BACK
      </Link>
    </p>
  )
}
