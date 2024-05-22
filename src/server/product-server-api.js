export class MethodsProductApi {
    async GETApiServer () {
        return await fetch('https://challenge-alurageek-api.onrender.com/listproducts')
            .then(res=>res.json())
            .catch(erro=>console.log(erro))
    };

    async POSTApiServer (productsData) {
        return await fetch('https://challenge-alurageek-api.onrender.com/createproducts', {
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

    async DELETEApiServer (id) {
        return await fetch('https://challenge-alurageek-api.onrender.com/deleteproducts', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id:id
            })
        })
            .then(response => response.json())
            .catch(erro => {
                console.log(erro)
            })
    }
}
