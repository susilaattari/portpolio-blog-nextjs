import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { Prisma } from '@prisma/client'
import IsValidPassword from "@/lib/ValidationPassword";

export async function POST(request) {
    const {name,email,password} = await request.json()
    const validasiPassword = IsValidPassword(password)

    if(!validasiPassword){
        return NextResponse.json({ data:"Password tidak memenuhi persyaratan.", code: 400 });
    }
 // Generate salt dengan tingkat keamanan yang disarankan
    const salt = bcrypt.genSaltSync(10);

    // Hash password menggunakan salt
    const hashedPassword = bcrypt.hashSync(password, salt);
    try {
      const user = await prisma.user.create({
        data: {
          email: email,
          password: hashedPassword,
          name: name,
        },
      });
      if (user) {
        return NextResponse.json({ data:"register Success", code: 200 });
      } else {
        throw new Error();
      }
    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            if (e.code === 'P2002') {
                return NextResponse.json({ data:"Email Sudah terdaftar", code: 500 });
            
            }
          }
          throw e
        
    }

}
