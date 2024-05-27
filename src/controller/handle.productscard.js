import { MethodsProductApi } from "../server/product-server-api.js";
import handleCreateEditModal from "./handle.create.editmodal.js";
const productContainer = document.getElementById("data___product");



export class HandleProductsCard {
    constructor(){
        const repositorie = new MethodsProductApi();
        this.productDataRepository = repositorie.GETApiServer();
    }


    creatCard (id, title, image, description, price) {
        const cardProduct = document.createElement('div');
        cardProduct.classList.add('card');
        cardProduct.innerHTML = `
            <div class="product__image">
                <img src=${image} alt="product">
            </div>
        
            <div class="info__products">
                <h1 class="product__name">${title.split('').slice(0, 30).join('').concat('...')}</h1>

                <p class="description__">${description.split('').slice(0, 80).join('').concat('...')}</p>

                <div class="info__container">
                    <div class="price__">
                        <span>R&#36;</span>
                        <p>${price}</p>
                    </div>
                    <div class="image__trash__edit">
                        <img class="trash__icon" src="assets/trash.svg" alt="icon trash">
                        <img class="edit__icon" src="assets/edit-icon.gif" alt="icon edit">
                    </div>
                </div>
            </div>
        `

        productContainer?.appendChild(cardProduct);

        // Deletando produtos caso click na lixeira
        cardProduct.addEventListener('click', async (event)=> {
            if (event.target.classList.contains('trash__icon')) {
                event.preventDefault();
                const repositorie = new MethodsProductApi();

                // deletando o produto
                await repositorie.DELETEApiServer(id);
                location.reload();
            }
            return 
        });

        cardProduct.addEventListener('click', (event)=> {
            if (event.target.classList.contains('edit__icon')) {
                event.preventDefault();
                handleCreateEditModal(id, title, image, description, price);
                return;
            }
            return;
        });

        return productContainer;
    }

    async renderCard () {
        const products = await this.productDataRepository;

        try {

            products.forEach(product => {
                this.creatCard(product.id, product.title, product.image, product.description, product.price)
            });
            
        } catch (error) {
            console.log(error)
        }

    };

};

