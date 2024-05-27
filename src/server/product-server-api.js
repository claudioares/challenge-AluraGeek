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

    async PutApiServer (data) {

        return await fetch(`https://challenge-alurageek-api.onrender.com/edit/id?id=${data.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                newTitle:data.title,
                newImage:data.image,
                newDescription:data.description,
                newPrice:data.price
            }),
        })
        .then(response => console.log(response))
        .catch(erro => {return erro})   
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
