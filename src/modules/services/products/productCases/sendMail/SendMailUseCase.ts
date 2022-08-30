import { prisma } from "../../../../../database/prismaClient";

interface ISendMail {
  id: string;
  paid: boolean;
}

export class SendMailUseCase {
  async execute({ id, paid }: ISendMail) {
    const result = await prisma.product.update({
      where: {
        id: String(id),
      },
      data: {
        paid,
        updated_at: new Date(),
      },
    });

    return result;
  }
}
