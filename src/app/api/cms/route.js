import { NextResponse } from "next/server";
import prisma from '@/lib/prisma';

export async function POST (request){
const {author,urlImg,title,content,desc} = await request.json()

try {
    const res= await prisma.contents.create({
      data: {
        author: author,
        title: title,
        desc: desc,
        conten:content,
        img:urlImg
      },
    });
    if (res) {
      return NextResponse.json({ data:"post Success", code: 200 });
    } else {
      throw new Error("gagal post");
    }
  } catch (e) {
    throw new Error(e);
      
  }
}