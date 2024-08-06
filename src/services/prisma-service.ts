
import { PrismaClient as Prisma } from '@prisma/client';

export class PrismaClient {
    private static instance: Prisma;
    private constructor() {}

    public static getInstance(): Prisma {
        if (!PrismaClient.instance) {
            PrismaClient.instance = new Prisma();
        }

        return PrismaClient.instance;
    }
}