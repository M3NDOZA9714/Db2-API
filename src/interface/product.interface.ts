export interface Product {
    Id: number,
    Name: string,
    Description: string,
    ForSale: number,
    createdAt: string,
    Property: Property[]
}

export interface ProductDB {
    Id: number,
    Name: string,
    Description: string,
    ForSale: number,
    createdAt: string,
}

export interface Property {
    Id: number,
    IdProduct: number,
    IdProperty: number,
}
