import prisma from "@/lib/prisma";
export const getContent = async () => {
  const response = await prisma.contents.findMany();
  return response;
};
export const getcontentById = async (id) => {
  const response = await prisma.contents.findUnique({
    where: {
      id: +id,
    },
  });
  return response;
};
