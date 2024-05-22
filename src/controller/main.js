import { MethodsProductApi } from "../server/product-server-api.js";
const productContainer = document.getElementById("data___product");



export class CreatedCardProducts {
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
                <h1 class="product__name">${title}</h1>

                <p class="description__">${description.split(' ').slice(0, 9).join(' ').concat('...')}</p>

                <div class="info__container">
                    <div class="price__">
                        <span>R&#36;</span>
                        <p>${price}</p>
                    </div>
                    <div class="image__trash">
                        <img class="trash__icon" src="assets/trash.svg" alt="icon trash">
                    </div>
                </div>
            </div>
        `

        productContainer?.appendChild(cardProduct);

        cardProduct.addEventListener('click', async (event)=> {
            if (event.target.classList.contains('trash__icon')) {
                event.preventDefault();
                const repositorie = new MethodsProductApi();

                // deletando o produto
                await repositorie.DELETEApiServer(id);
            }
            location.reload();
            return 
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

    }
}

function render () {
    const card = new CreatedCardProducts;
    card.renderCard();
}

render();

