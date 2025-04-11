// app/api/users/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
 try {
  const users = await prisma.user.findMany();
  console.log("📦 Usuários encontrados:", users);
  return NextResponse.json(users);
 } catch (error) {
  console.error("❌ ERRO NO GET /api/users:", error);
  return NextResponse.json(
   { error: "Erro ao buscar usuários" },
   { status: 500 }
  );
 }
}

export async function POST(req: Request) {
 const body = await req.json();
 const { name, email, password } = body;

 const user = await prisma.user.create({
  data: {
   name,
   email,
   password,
  },
 });

 return NextResponse.json(user, { status: 201 });
}
