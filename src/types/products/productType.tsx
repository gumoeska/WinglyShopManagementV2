export type Product = {
    id: number,
    code: string,
    description: string,
    idCategory: number,
    categoryDescription: string,
    price: number,
    imageUrl: string,
    isActive: boolean,
    hasStock: boolean
}

export type ProductRegistration = {
    code: string,
    description: string,
    price: number,
    hasStock: boolean,
    isActive: boolean,
    idCategory: number,
    imageUrl: string
}