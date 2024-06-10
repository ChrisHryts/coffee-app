import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getTransactions = async (req: Request, res: Response) => {
  const { amountMin, amountMax, category, type } = req.query;

  console.log(amountMin, amountMax, category, type);

  const filters: any = {};

  if (amountMin !== undefined && amountMax !== undefined) {
    const min = parseFloat(amountMin as string);
    const max = parseFloat(amountMax as string);
    if (!isNaN(min) && !isNaN(max)) {
      filters.amount = { gte: min, lte: max };
    }
  } else if (amountMin !== undefined) {
    const min = parseFloat(amountMin as string);
    if (!isNaN(min)) {
      filters.amount = { gte: min };
    }
  } else if (amountMax !== undefined) {
    const max = parseFloat(amountMax as string);
    if (!isNaN(max)) {
      filters.amount = { lte: max };
    }
  }

  if (category) filters.category = category;
  if (type) filters.type = { contains: type as string };

  const transactions = await prisma.transaction.findMany({
    where: filters,
  });

  res.json(transactions);
};
