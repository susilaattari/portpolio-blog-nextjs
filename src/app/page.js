"use client";
import { Button } from "@/Components";
import Image from "next/image";
import { Chard } from "@/Components";
import { useState } from "react";

const cardsData = [
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2023/07/28/15/14/wall-8155414_1280.jpg",
    title: "Judul Kartu 1",
    description: "Deskripsi untuk kartu pertama.",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2023/07/28/10/17/machinery-8154964_1280.jpg",
    title: "Judul Kartu 1",
    description: "Deskripsi untuk kartu pertama.",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2023/05/25/09/00/bus-8016675_1280.jpg",
    title: "Judul Kartu 1",
    description: "Deskripsi untuk kartu pertama.",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2023/07/24/01/31/plane-8145957_1280.jpg",
    title: "Judul Kartu 1",
    description: "Deskripsi untuk kartu pertama.",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2023/07/28/15/14/wall-8155414_1280.jpg",
    title: "Judul Kartu 1",
    description: "Deskripsi untuk kartu pertama.",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2023/07/28/10/17/machinery-8154964_1280.jpg",
    title: "Judul Kartu 1",
    description: "Deskripsi untuk kartu pertama.",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2023/05/25/09/00/bus-8016675_1280.jpg",
    title: "Judul Kartu 1",
    description: "Deskripsi untuk kartu pertama.",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2023/07/24/01/31/plane-8145957_1280.jpg",
    title: "Judul Kartu 1",
    description: "Deskripsi untuk kartu pertama.",
  },
  // Tambahkan data kartu lainnya di sini
];
export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (number) => setCurrentPage(page);

  return (
    <>
      <main className="h-screen md:gap-[100px]  bg-fixed md:py-12 sm:py-10 bg-[url('/illustration.png')]">
        <div className=" text-center md:mt-[100px] ">
          <h1 className="font-bold text-white md:m-auto sm:text-[30px] leading-tight md:w-[800px] f-roboto pt-[100px] md:text-[40px] text-[25px]">
            Jasa Pembuatan Website yang lebih baik untuk produk digital Anda
          </h1>
          <p className="md:text-[20px] text-[18px] my-5">
            Mengubah Ide Anda menjadi Realitas. Saya menyelesaikan sebuah
            project dengan cepat dan tepat sesuai timeline yang ditentukan.
          </p>
          <Button
            url="/portfolio"
            text="lihat karya Saya"
            color="bg-emerald-400"
          />
        </div>
      </main>
      <div className=" bg-white">
        <div className=" relative flex items-center justify-center lg:h-[550px] h-[800px] md:h-[700px] w-screen">
          <div className="md:w-[750px] lg:w-[850px] w-[430px] m-auto absolute lg:-top-[120px] md:-top-[100px]  p-[70px] rounded-md drop-shadow-lg border  bg-white">
            <div className=" text-black md:flex md:gap-7">
              <Image
                src="/foto.jpeg"
                width={250}
                height={350}
                className="border m-auto md:m-0 md:h-[350px] md:w-[300px] bg-cover"
              />
              <div className="text-left mt-5">
                <h2 className="f-cormorant md:text-[30px] ">
                  Hai, Saya Susila Tropika, Saya seorang Web Developer
                </h2>
                <p className="my-5 md:text-[18px] sm:text-[16px] bg-">
                  Saya merupakan seorang lulusan dari jurusan sistem informasi
                  dengan pengalaman pernah menjabat sebagai ketua divisi bisnis
                  dari organisasi himpunan di kampus. Awal dari ketertarikan
                  terhadap dunia teknologi informasi dimulai saat memasuki
                  kuliah dan banyak mempelajari ilmu teknologi informasi di
                  kelas maupun diluar kelas.
                </p>
                <Button
                  url="/about"
                  text="Tentang Saya"
                  color="bg-orange-400"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-screen text-black m-auto text-center">
          <div className="md:w-[550px] m-auto text-center">
            <h1 className="text-[35px] f-roboto font-extralight">
              Butuh Bantuan Saya?
            </h1>
            <p className="md:text-[20px] font-thin my-3">
              Saya siap membantu anda dengan senang hati, Segera hubungi saya
              untuk menemukan solusi terbaik, saya siap memberikan informasi
              lengkap tentang produk yang dapat memenuhi kebutuhan Anda.
            </p>
            <Button url="/contact" text="Hubungi Saya" color="bg-orange-400" />
          </div>
          <div className="lg:flex justify-center items-center mt-2 p-[50px]">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {cardsData.map((card, index) => (
                <Chard
                  key={index}
                  imageUrl={card.imageUrl}
                  title={card.title}
                  description={card.description}
                />
              ))}
                
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
