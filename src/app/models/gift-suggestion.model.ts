export interface GiftSuggestion{
    gifts: Gift[];
    categories: Category[];
    minPrice: number;
    maxPrice: number;
}

export interface Gift {
    image: string;
    title: string;
    category: string;
    price: number;
    description: string;
    id: string;
}

export interface Category{
    id: string;
    title: string;
}