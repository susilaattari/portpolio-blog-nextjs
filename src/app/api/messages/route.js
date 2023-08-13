import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request) {
  const { name, email, message } = await request.json();
  try {
    const msg = await prisma.message.create({
      data: {
        email,
        message,
        name,
      },
    });

    if (msg) {
      return NextResponse.json({ data: "mengirim pesan sukses", code: 200 });
    }
  } catch (error) {}
}
