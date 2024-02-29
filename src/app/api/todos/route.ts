import { NextResponse } from "next/server";
const DATA = "https://jsonplaceholder.typicode.com/todos";

export async function GET() {
  const res = await fetch(DATA);
  const todos: Todo[] = await res.json();
  return NextResponse.json(todos);

}