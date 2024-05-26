import { FastifyInstance } from "fastify"
import { prisma } from "../db/database.config";
import { IEditQueryType, IEditProdictsType } from "../interfaces/interfaces";


export async function EditProduct(app: FastifyInstance) {

    app.put("/edit/id", async (request, reply) => {

        const { newTitle }:IEditProdictsType = request.body as IEditProdictsType;
        const { id }: IEditQueryType = request.query as IEditQueryType;

        try {

            const resultPrismaRepoditory = await prisma.products.updateMany({
                where: {
                    id
                },
                data: {
                    title:newTitle
                }
            });

            if(resultPrismaRepoditory.count < 1) {
                return reply.status(201).send({messege: "Error during process!"})
            }

            return reply.status(201).send({messege: "Success!"})

        } catch (error) {
            console.error('Error during event create:', error);
            return reply.status(500).send({ error: "Error during creation!" });
        }
    })
}