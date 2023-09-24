export default async function getUser(userId: string) {
  const res = await fetch(`https://dummyjson.com/users/${userId}`)
  if (!res.ok) throw new Error('failed to fetch user')
  return res.json()
}
