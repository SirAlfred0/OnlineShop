import { Category } from "./gift-suggestion.model";

export interface NewProducts
{
    products: NewProduct[];
    categories: Category[];
    minPrice: number;
    maxPrice: number;
}

export interface NewProduct{
    image: string;
    title: string;
    category: string;
    price: number;
    description: string;
    id: string;
}