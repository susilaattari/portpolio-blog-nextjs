import { NextResponse } from "next/server";
import { getUser } from "@/Models/modelUser";

export async function GET() {
  const res = await getUser();
  return NextResponse.json({ data: res, code: 200 });
}
