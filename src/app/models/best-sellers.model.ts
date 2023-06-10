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
    phoneNumber: string;
    email: string;
    website: string;
    areaOfWork: string;
    id: string;
    socialMedia: SocialMedia[];
}


export interface SocialMedia
{
    image: string;
    name: string;
    address: string;
}