import { NextResponse } from "next/server";

const DATA = "https://jsonplaceholder.typicode.com/todos";
const API_KEY: string = process.env.DATA_API_KEY as string;
console.log(">>>", API_KEY)

export async function GET(request: Request) {
  const id = request.url.slice(request.url.lastIndexOf("/") + 1);
  const res = await fetch(`${DATA}/${id}`);
  const todo: Todo = await res.json();
  if (!todo.id) return NextResponse.json({ message: "Inavlid" })
  return NextResponse.json(todo);
}
