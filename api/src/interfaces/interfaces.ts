export interface ICreateProducts {
    title: string,
    image: string,
    description: string,
    price: string
}

export interface IMethodDeleteProductsType {
    id: string
}

export interface IEditQueryType {
    id: string;
}

export interface IEditProdictsType {
    newTitle: string;
    newImage: string;
    newDescription: string;
    newPrice: string;
}