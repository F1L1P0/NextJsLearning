import { NextResponse } from 'next/server'

const info = [
  { id: 0, name: 'Filip', lname: 'Drábek' },
  { id: 1, name: 'Filip', lname: 'Drábek' },
  { id: 2, name: 'Filip', lname: 'Drábek' },
  { id: 3, name: 'Filip', lname: 'Drábek' },
]

const data = JSON.stringify(info)

export async function GET(request) {
  return new Response(data)
}

export async function POST(request) {
  const body = await req.json()

  //return new Response('OK')
  return new Response(JSON.stringify({ hello: 'world' }))
}
