import type { Metadata } from 'next'
import getUsers from '../lib/getUsers'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Users',
}

export default async function UsersPage() {
  const usersData: Promise<User[]> = getUsers()

  const users = await usersData

  //console.log('Hello') // Did you find where this appears?

  const content = (
    <section className="flex flex-col w-full items-center mt-6">
      <h2>
        <Link className="btn my-5" href="/">
          Back to Home
        </Link>
      </h2>
      <br />
      {users.map((user) => {
        return (
          <>
            <p key={user.id}>
              <Link
                className="border-solid border-b-2 border-amber-400"
                href={`/users/${user.id}`}>
                {user.name}
              </Link>
            </p>
            <br />
          </>
        )
      })}
    </section>
  )

  return content
}
