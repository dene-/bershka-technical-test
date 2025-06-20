import type { Category } from "@/domain/interfaces/categories.interfaces";

export const MOCK_CATEGORIES: Category[] = [
  {
    name: "Women",
    subcategories: [
      {
        name: "Clothing",
        subcategories: [
          { name: "Dresses", subcategories: [] },
          { name: "Tops", subcategories: [] },
          { name: "Jeans", subcategories: [] },
        ],
      },
      {
        name: "Shoes",
        subcategories: [
          { name: "Sneakers", subcategories: [] },
          { name: "Sandals", subcategories: [] },
        ],
      },
      {
        name: "Accessories",
        subcategories: [
          { name: "Bags", subcategories: [] },
          { name: "Jewelry", subcategories: [] },
        ],
      },
    ],
  },
  {
    name: "Men",
    subcategories: [
      {
        name: "Clothing",
        subcategories: [
          { name: "T-Shirts", subcategories: [] },
          { name: "Jeans", subcategories: [] },
        ],
      },
      {
        name: "Shoes",
        subcategories: [
          { name: "Sneakers", subcategories: [] },
          { name: "Boots", subcategories: [] },
        ],
      },
    ],
  },
  {
    name: "Kids",
    subcategories: [
      {
        name: "Clothing",
        subcategories: [
          { name: "T-Shirts", subcategories: [] },
          { name: "Shorts", subcategories: [] },
        ],
      },
    ],
  },
];