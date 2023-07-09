import prisma from "@/lib/prisma";
export const getUser = async () => {
  const response = await prisma.user.findMany();
  return response;
};
