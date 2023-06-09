import { adsModel } from "src/app/models/ads.model";
import { BestSellers } from "src/app/models/best-sellers.model";
import { GiftSuggestion } from "src/app/models/gift-suggestion.model";
import { HomeProduct } from "src/app/models/home-products.model";
import { NewProduct, NewProducts } from "src/app/models/new-product.model";

interface test {
  id: string;
  name: string;
  parentId: string | null;
}

export class DataService {
  static ads: adsModel[] = [
    {
      id: 1,
      text: "Small electronics, small houses",
      actionName: "purchase now!",
      params: {
        t: 24,
        q: 22
      },
      route: "",
    },
    {
      id: 2,
      text: "up to 60% discount, buy your summber clothing",
      actionName: "go shopping",
      params: {},
      route: "",
    },
    {
      id: 3,
      text: "lucky box, open the box and win discounts and prices",
      actionName: "try your luck",
      params: {},
      route: "",
    },
    {
      id: 4,
      text: "shiping today, you can have it in couple of hours",
      actionName: "go buy now!",
      params: {},
      route: "",
    },
    {
      id: 5,
      text: "dont worry about your cell phone charging",
      actionName: "buy",
      params: {},
      route: "",
    },
  ]

  static homeProducts: HomeProduct[] = [
    {
      category: "Man & Woman Fashion",
      products: [
        {
          id: "1",
          image: "assets/images/products/fashion/2.png",
          name: "Man T-Shirt",
          params: {},
          price: 20
        },
        {
          id: "2",
          image: "assets/images/products/fashion/1.png",
          name: "Man Shirt",
          params: {},
          price: 40
        },
        {
          id: "3",
          image: "assets/images/products/fashion/3.png",
          name: "Woman Scart",
          params: {},
          price: 37
        },
        {
            id: "1",
            image: "assets/images/products/fashion/2.png",
            name: "Man T-Shirt",
            params: {},
            price: 20
          },
          {
            id: "2",
            image: "assets/images/products/fashion/1.png",
            name: "Man Shirt",
            params: {},
            price: 40
          },
          {
            id: "3",
            image: "assets/images/products/fashion/3.png",
            name: "Woman Scart",
            params: {},
            price: 37
          },
      ]
    },
    {
      category: "Electronics",
      products: [
        {
          id: "4",
          image: "assets/images/products/electronics/2.png",
          name: "Laptops",
          params: {},
          price: 120
        },
        {
          id: "5",
          image: "assets/images/products/electronics/3.png",
          name: "Mobiles",
          params: {},
          price: 180
        },
        {
          id: "6",
          image: "assets/images/products/electronics/1.png",
          name: "Computers",
          params: {},
          price: 90
        },
      ]
    },
    {
      category: "Jewellery",
      products: [
        {
          id: "7",
          image: "assets/images/products/jewleries/1.png",
          name: "Jumkas",
          params: {},
          price: 150
        },
        {
          id: "8",
          image: "assets/images/products/jewleries/3.png",
          name: "Necklaces",
          params: {},
          price: 180
        },
        {
          id: "9",
          image: "assets/images/products/jewleries/2.png",
          name: "Kangans",
          params: {},
          price: 300
        },
      ]
    },
  ]

  static giftSuggestions: GiftSuggestion = 
    {
      categories: [
        {
          id: "1",
          title: "electronics"
        },
        {
          id: "2",
          title: "Man and woman Fashion"
        },
        {
          id: "3",
          title: "Jewlleries"
        }
      ],
      minPrice: 10,
      maxPrice: 980,
      gifts: [
        {
          category: "Woman And Man Fashion",
          description: "",
          image: "assets/images/products/fashion/2.png",
          price: 10,
          title: "Man T-Shirt",
          id: "1"
        },
        {
          category: "Woman And Man Fashion",
          description: "",
          image: "assets/images/products/fashion/1.png",
          price: 60,
          title: "Man Shirt",
          id: "2"
        },
        {
          category: "Woman And Man Fashion",
          description: "",
          image: "assets/images/products/fashion/3.png",
          price: 90,
          title: "Woman Scart",
          id: "3"
        },
        {
          category: "Elctronics",
          description: "",
          image: "assets/images/products/electronics/2.png",
          price: 600,
          title: "Laptop",
          id: "4"
        },
        {
          category: "Elctronics",
          description: "",
          image: "assets/images/products/electronics/3.png",
          price: 450,
          title: "Mobile",
          id: "5"
        },
        {
          category: "Elctronics",
          description: "",
          image: "assets/images/products/electronics/1.png",
          price: 500,
          title: "Computers",
          id: "6"
        },
        {
          category: "Jewlleries",
          description: "",
          image: "assets/images/products/jewleries/1.png",
          price: 750,
          title: "Jumkas",
          id: "7"
        },
        {
          category: "Jewlleries",
          description: "",
          image: "assets/images/products/jewleries/3.png",
          price: 980,
          title: "Necklaces",
          id: "8"
        },
        {
          category: "Jewlleries",
          description: "",
          image: "assets/images/products/jewleries/2.png",
          price: 800,
          title: "Kangans",
          id: "9"
        }
      ]
    }

  static bestSellers: BestSellers = {
    categories: [
      {
        id: "1",
        title: "Food"
      },
      {
        id: "2",
        title: "Electronics"
      },
      {
        id: "3",
        title: "Jewlleries"
      },
      {
        id: "4",
        title: "Fashion"
      },
      {
        id: "5",
        title: "Self Care"
      },
      {
        id: "6",
        title: "Furnature"
      }
    ],
    expMax: 200,
    expMin: 17,
    sellers: [
      {
        id: "1",
        name: "cocacola",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iure laborum repellat eos officia dolorem sunt non est perferendis necessitatibus nostrum iusto error doloribus repellendus neque, vel, corporis aliquam quibusdam.",
        areaOfWork: "Food, Electronics, Self Care",
        brandImg: "assets/images/brands/1.png"
      },
      {
        id: "2",
        name: "apple",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iure laborum repellat eos officia dolorem sunt non est perferendis necessitatibus nostrum iusto error doloribus repellendus neque, vel, corporis aliquam quibusdam.",
        areaOfWork: "Food, Electronics, Self Care",
        brandImg: "assets/images/brands/2.png"
      },
      {
        id: "3",
        name: "shiaomi",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iure laborum repellat eos officia dolorem sunt non est perferendis necessitatibus nostrum iusto error doloribus repellendus neque, vel, corporis aliquam quibusdam.",
        areaOfWork: "Food, Electronics, Self Care",
        brandImg: "assets/images/brands/3.png"
      },
      {
        id: "4",
        name: "samsung",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iure laborum repellat eos officia dolorem sunt non est perferendis necessitatibus nostrum iusto error doloribus repellendus neque, vel, corporis aliquam quibusdam.",
        areaOfWork: "Food, Electronics, Self Care",
        brandImg: "assets/images/brands/4.png"
      }
    ]
  }

  static newProducts: NewProducts =  {
    categories: [
      {
        id: "1",
        title: "electronics"
      },
      {
        id: "2",
        title: "Man and woman Fashion"
      },
      {
        id: "3",
        title: "Jewlleries"
      }
    ],
    minPrice: 10,
    maxPrice: 980,
    products: [
      {
        category: "Woman And Man Fashion",
        description: "",
        image: "assets/images/products/fashion/2.png",
        price: 10,
        title: "Man T-Shirt",
        id: "1"
      },
      {
        category: "Woman And Man Fashion",
        description: "",
        image: "assets/images/products/fashion/1.png",
        price: 60,
        title: "Man Shirt",
        id: "2"
      },
      {
        category: "Woman And Man Fashion",
        description: "",
        image: "assets/images/products/fashion/3.png",
        price: 90,
        title: "Woman Scart",
        id: "3"
      },
      {
        category: "Elctronics",
        description: "",
        image: "assets/images/products/electronics/2.png",
        price: 600,
        title: "Laptop",
        id: "4"
      },
      {
        category: "Elctronics",
        description: "",
        image: "assets/images/products/electronics/3.png",
        price: 450,
        title: "Mobile",
        id: "5"
      },
      {
        category: "Elctronics",
        description: "",
        image: "assets/images/products/electronics/1.png",
        price: 500,
        title: "Computers",
        id: "6"
      },
      {
        category: "Jewlleries",
        description: "",
        image: "assets/images/products/jewleries/1.png",
        price: 750,
        title: "Jumkas",
        id: "7"
      },
      {
        category: "Jewlleries",
        description: "",
        image: "assets/images/products/jewleries/3.png",
        price: 980,
        title: "Necklaces",
        id: "8"
      },
      {
        category: "Jewlleries",
        description: "",
        image: "assets/images/products/jewleries/2.png",
        price: 800,
        title: "Kangans",
        id: "9"
      }
    ]
  }
}
