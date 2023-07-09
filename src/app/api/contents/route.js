import { NextResponse } from "next/server";
import { getContent } from "@/Models/modelContent";

export const GET = async () => {
  try {
    const response = await getContent();

    return NextResponse.json({ data: response, status: 200 });
  } catch (error) {
    return NextResponse.json({ massage: "Database Error", status: 500 });
  }
};
