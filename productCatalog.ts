import {fail} from "node:assert";

interface BaseProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    inStock: boolean;
    category: string;
    expiryDate: Date
}

interface ElectronicsProduct extends BaseProduct {
    category: "electronics";
    warranty: string;
    brand: string;
    specifications: Record<string, boolean>;
}

interface ClothingProduct extends BaseProduct {
    category: "clothing";
    sizes: ("XS" | "S" | "M" | "L" | "XL")[];
    colors: string[];
    material: string;
}

type Product = ElectronicsProduct | ClothingProduct;

function getProductDetails(product: Product): string {
    switch (product.category) {
        case "electronics":
            return `${product.name} by ${product.brand} - ${product.warranty} warranty`;
        case "clothing":
            return `${product.name} - Available in ${product.colors.join(", ")}`;
        default:
            // TypeScript ensures we handle all cases
            const exhaustiveCheck: never = product;
            return exhaustiveCheck;
    }
}

let laptop: ElectronicsProduct = {
    id: "1",
    name: "Laptop",
    description: "High performance laptop",
    price: 999.99,
    inStock: true,
    category: "electronics",
    expiryDate: new Date("2025-12-31"),
    warranty: "2 years",
    brand: "TechBrand",
    specifications: {
        test: false,
        processor: false,
        ram: false,
        storage: false,
    }
}

type CatName = "miffy" | "boris" | "mordred";

interface CatInfo {
    age: number;
    breed: string;
}

const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
    ameet: {}
};

const cats: Record<CatName, CatInfo>