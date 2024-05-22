import { FastifyInstance } from "fastify"
import { prisma } from "../db/database.config";

interface IMethodDeleteProductsType {
    id: string
}

export async function DeleteProducts(app: FastifyInstance) {

    app.delete("/deleteproducts", async (request, reply) => {

        const {id}:IMethodDeleteProductsType = request.body as IMethodDeleteProductsType;

        try {

            const resultPrismaRepoditory = await prisma.products.delete({
                where: {
                    id
                }
            });


            return reply.status(201).send(resultPrismaRepoditory)

        } catch (error) {
            console.error('Error during event create:', error);
            return reply.status(500).send({ error: "Error during creation!" });
        }
    })
}