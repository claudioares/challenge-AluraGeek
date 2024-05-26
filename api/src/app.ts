import fastify, { FastifyInstance } from "fastify"
import cors from "@fastify/cors";
import { ListProducts } from "./routers/list.products";
import { CreteProducts } from "./routers/create.products";
import { DeleteProducts } from "./routers/delete.products";
import { EditProduct } from "./routers/edit.product";


export class App {
    private app: FastifyInstance;
    constructor() {
        this.app = fastify()
    }


    listen(){
        this.app.listen({
            host: '0.0.0.0',
            port: process.env.PORT ? Number(process.env.PORT) : 3333,
        }).then(()=>console.log("HTTP Server running..."));
    };

    register(){
        this.app.register(cors, {
            origin: "*",
            methods: ['POST', 'DELETE', 'GET']
        })

        this.app.register(ListProducts)
        this.app.register(CreteProducts)
        this.app.register(DeleteProducts)
        this.app.register(EditProduct)
    }
}