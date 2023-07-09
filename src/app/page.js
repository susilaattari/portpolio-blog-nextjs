import { Button } from "@/Components";
import Image from "next/image";
import Hero from "public/hero.png";
export default function Home() {
  return (
    <main className="flex justify-between items-center gap-[100px] y-12">
      <div className="flex-1 flex-col flex gap-[50px]">
        <h1 className="font-bold bg-gradient-to-r from-emerald-300 to-emerald-500 text-[62px] bg-clip-text text-transparent">
          Better design for your digital products.
        </h1>
        <p>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/portfolio" text="See Our Works" color="bg-emerald-400" />
      </div>
      <div className="flex-1">
        <Image
          src={Hero}
          alt="Hero"
          className="w-full h-[500px] object-cover"
        />
      </div>
    </main>
  );
}
