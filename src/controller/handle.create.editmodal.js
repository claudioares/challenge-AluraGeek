import { MethodsProductApi } from "../server/product-server-api.js";

export default function handleCreateEditModal (id, title, image, description, price) {
    const containerModal = document.getElementById("edit__modal__products");


    containerModal.classList.remove("div__none");
    containerModal.classList.add("edit__modal__products")
    const divFrom = document.createElement('form');
    divFrom.classList.add("form__modal__edit__class");

    // Adicionando o input do nome do produto
    const titleInput = document.createElement('input');
    titleInput.classList.add("input__form__modal");
    titleInput.type = "text";
    titleInput.placeholder = "Nome";
    titleInput.value = title;

    // Adicionando o input do preço do produto
    const priceInput = document.createElement('input');
    priceInput.classList.add("input__form__modal");
    priceInput.type = "text";
    priceInput.placeholder = "Valor";
    priceInput.value = price;

    // Adicionando o input do link da imagem do produto
    const imageInput = document.createElement('input');
    imageInput.classList.add("input__form__modal");
    priceInput.type = "text";
    imageInput.placeholder = "URL/Imagem";
    imageInput.value = image;

    // Adicionando o input da descrição do produto
    const descriptionInput = document.createElement('textarea');
    descriptionInput.classList.add("textarea__form__modal");
    descriptionInput.placeholder = "Descrição";
    descriptionInput.value = description;
    
    containerModal?.appendChild(divFrom);
    divFrom?.appendChild(titleInput);
    divFrom?.appendChild(priceInput);
    divFrom?.appendChild(imageInput);
    divFrom?.appendChild(descriptionInput);

    // Adicionando a div dos botões
    const containerBottons = document.createElement("div");

    containerBottons.classList.add("div_buttons_edit");
    divFrom.appendChild(containerBottons);

    containerBottons.innerHTML = `
            <button id="send__button_edit" class="send__button_edit__class button__green">Guardar</button>
            <button class="send__button_edit__class button__red">Cancelar</button>
    `

    containerBottons.addEventListener('click', async (event)=>{
        if (event.target.classList.contains('button__green')){
            event.preventDefault();
            
            const dataFormEditProduct = {
                id,
                title:titleInput.value,
                price:priceInput.value,
                image:imageInput.value,
                description:descriptionInput.value
            };


            const repositorie = new MethodsProductApi();
            const responseRepository = await repositorie.PutApiServer(dataFormEditProduct);

            console.log("RESPOSTA DO SERVIDOR", responseRepository)
        }
    })

    containerBottons.addEventListener('click', (event)=>{
        if (event.target.classList.contains('button__red')){
            event.preventDefault();
            containerModal.classList.remove("edit__modal__products");
            containerModal.classList.add("div__none")
            containerModal.removeChild(divFrom);
        }
    })

}