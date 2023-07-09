import { getcontentById } from "@/Models/modelContent";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const response = await getcontentById(params.id);
  try {
    return NextResponse.json({ data: response, status: 200 });
  } catch (error) {
    return NextResponse.json({ massage: "Database Error", status: 500 });
  }
};
