import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
const heandler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SCREET,
    }),
    CredentialsProvider({
      // Nama yang akan ditampilkan di formulir masuk
      id: "credentials",
      name: "Credentials",
      // `Credential digunakan untuk membuat formulir di halaman masuk
      //Anda dapat menentukan bidang mana yang harus diserahkan, dengan menambahkan kunci ke objek `kredensial`
      // misal password,email,url dll
      // Anda dapat meneruskan atribut HTML apa pun ke tag <input> melalui objek.
      // credentials: {
      //   username: { label: "Username", type: "text", placeholder: "jsmith" },
      //   password: { label: "Password", type: "password" }
      // },

      async authorize(credentials) {
        try {
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email,
            },
          });

          if (user) {
            //check password
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error({massage:"Password tidak ditemukan"});
            }
          } else {
            throw new Error({massage:"User Not Found"});
          }
        } catch (err) {
          throw new Error(err.massage);
        }
      },
    }),
  ],
  pages: {
    error: "/dashboard/login",
  },
});

export { heandler as GET, heandler as POST };
