export interface HomeProduct
{
    category: string;
    products: product[];
}


interface product
{
    price: number;
    name: string;
    image: string;
    params: {};
    id: string
}