const form = document.getElementById("form__data__products");
const allInputs = form.querySelectorAll('input, textarea');
const sendButton = document.getElementById("send__button");
import { MethodsProductApi } from "../server/product-server-api.js";


let capturedValues = [];

sendButton.addEventListener("click", (e)=>{
    e.preventDefault();

    allInputs.forEach(input => {
        if(!input.value){
            throw new Error("All requisits required! Not found products");
        }
        const inputValue = input.value;
        capturedValues.push(inputValue)
    });


    postProductsData(capturedValues);

    allInputs.forEach(input => {
        input.value = "";
    })
});


async function postProductsData (values) {
    const methodsProductsApi = new MethodsProductApi();
    await methodsProductsApi.POSTApiServer(
        {
            title: values[0],
            price: values[1],
            image: values[2],
            description: values[3]
        }
    )

    location.reload();
}