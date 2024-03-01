import { NextResponse } from "next/server";
import { comma } from "postcss/lib/list";
const DATA = "https://jsonplaceholder.typicode.com/todos";
const API_KEY: string = process.env.DATA_API_KEY as string;
console.log(API_KEY)

export async function GET() {
  const res = await fetch(DATA);
  const todos: Todo[] = await res.json();
  return NextResponse.json(todos);
}


export async function DELETE(request: Request) {
  const { id }: Partial<Todo> = await request.json();
  if (!id) return NextResponse.json({ 'message': "Todo id is required" });
  await fetch(`${DATA}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'API-KEY': API_KEY
    }
  })
  return NextResponse.json({ 'message': "Todo deleted" })
}


export async function POST(request: Request) {
  const { userId, title }: Partial<Todo> = await request.json();
  if (!userId || !title) return NextResponse.json({ 'message': "Missing required data" });
  const res = await fetch(DATA, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'API-KEY': API_KEY
    },
    body: JSON.stringify({
      userId, title, completed: false
    })
  })
  const newTodo: Todo = await res.json();
  return NextResponse.json({ 'message': "New Todo created" })
}


export async function PUT(request: Request) {
  const { userId, id, title, completed }: Todo = await request.json();
  if (!userId || !id || !title || typeof (completed) !== 'boolean') return NextResponse.json({ 'message': "Missing required data" });
  const res = await fetch(`${DATA}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'API-KEY': API_KEY
    },
    body: JSON.stringify({
      userId, title, completed: false
    })
  })
  const updatedTodo: Todo = await res.json();
  return NextResponse.json({ 'message': "New Todo created" })
}