import { FastifyInstance } from "fastify"
import { prisma } from "../db/database.config";
import { ICreateProducts } from "../interfaces/interfaces";


export async function CreteProducts(app: FastifyInstance) {

    app.post("/createproducts", async (request, reply) => {

        try {
            const {title, image, description, price}:ICreateProducts = request.body as ICreateProducts;

            const resultPrismaRepoditory = await prisma.products.create({
                data: {
                    title, image, description, price
                }
            })

            return reply.status(201).send(resultPrismaRepoditory)

        } catch (error) {
            console.error('Error during event create:', error);
            return reply.status(500).send({ error: "Error during creation!" });
        }
    })
}