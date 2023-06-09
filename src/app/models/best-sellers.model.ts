import { Category } from "./gift-suggestion.model";

export interface BestSellers
{
    categories: Category[],
    expMin: number,
    expMax: number
    sellers: Seller[]
}



export interface Seller{
    brandImg: string;
    name: string;
    description: string;
    areaOfWork: string
    id: string
}