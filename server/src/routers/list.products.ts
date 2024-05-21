import { FastifyInstance } from "fastify"
import { prisma } from "../db/database.config";


export async function ListProducts(app: FastifyInstance) {

    app.get("/listproducts", async (request, reply) => {

        try {

            const resultPrismaRepoditory = await prisma.products.findMany();


            return reply.status(201).send(resultPrismaRepoditory)

        } catch (error) {
            console.error('Error during event create:', error);
            return reply.status(500).send({ error: "Error during creation!" });
        }
    })
}