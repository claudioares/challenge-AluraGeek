export class MethodsProductApi {
    async GETApiServer () {
        return await fetch('http://localhost:3333/listproducts')
            .then(res=>res.json())
            .catch(erro=>console.log(erro))
    };

    async POSTApiServer (productsData) {
        return await fetch('http://localhost:3333/createproducts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productsData)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Response:', data)
            })
            .catch(erro => {
                console.log(erro)
            })
    }
}